/** @jest-environment jsdom */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const ScoreCounter = require('score-tests');

const modifyHtmlContent = fs.readFileSync(path.join(__dirname, 'modify.html'), 'utf8');

const testSuiteName = 'Modify Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  beforeEach(() => {
    document.documentElement.innerHTML = modifyHtmlContent;
    jest.resetModules();
    require('./modify');

    scoreCounter.add(expect); // DO NOT TOUCH
  });

  it('clickCounterHandler - should increment the data attribute "clicks"', () => {
    const clickButton = document.querySelector('#click-button');
    expect(clickButton.dataset.clicks).toBe('0');

    clickButton.click();
    expect(clickButton.dataset.clicks).toBe('1');

    clickButton.click();
    expect(clickButton.dataset.clicks).toBe('2');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('clickCounterHandler - should update the text content of the button', () => {
    const clickButton = document.querySelector('#click-button');
    expect(clickButton.textContent).toContain("I haven't been clicked!");

    clickButton.click();
    expect(clickButton.textContent).toContain("I've been clicked 1 time.");

    clickButton.click();
    expect(clickButton.textContent).toContain("I've been clicked 2 times!");

    clickButton.click();
    expect(clickButton.textContent).toContain("I've been clicked 3 times!");

    clickButton.click();
    expect(clickButton.textContent).toContain("I've been clicked 4 times!");

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('handleKeydown - should update the text content of the #keydown-tracker div', () => {
    const keydownTracker = document.querySelector('#keydown-tracker');

    const keydownEventA = new KeyboardEvent('keydown', { code: 'KeyA' });

    document.body.dispatchEvent(keydownEventA);
    expect(keydownTracker.textContent).toContain('You pressed KeyA');

    const keydownEventSpace = new KeyboardEvent('keydown', { code: 'Space' });
    document.body.dispatchEvent(keydownEventSpace);
    expect(keydownTracker.textContent).toContain('You pressed Space');

    const keydownEventEnter = new KeyboardEvent('keydown', { code: 'Enter' });
    document.body.dispatchEvent(keydownEventEnter);
    expect(keydownTracker.textContent).toContain('You pressed Enter');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('clickCounterHandler inline - is now a listener and not an inline function', () => {
    const inlineButton = document.querySelector('#inline-example');
    expect(typeof inlineButton.onclick === 'function').toBeFalsy();

    expect(inlineButton.textContent).toContain("I shouldn't be inline");

    inlineButton.click();
    expect(inlineButton.textContent).toContain("I've been clicked 1 time.");

    inlineButton.click();
    expect(inlineButton.textContent).toContain("I've been clicked 2 times!");

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('handleDelegation - should not update the span unless a button was pressed (ignore the div)', () => {
    const delegationContainer = document.querySelector('#delegation');
    const upButton = document.querySelector('#up');
    const leftButton = document.querySelector('#left');
    const middleButton = document.querySelector('#middle');
    const rightButton = document.querySelector('#right');
    const downButton = document.querySelector('#down');

    const delegationResult = document.querySelector('#delegation-result');

    delegationContainer.click();
    expect(delegationResult.textContent).toBe('');

    upButton.click();
    expect(delegationResult.textContent).toContain('Up');

    leftButton.click();
    expect(delegationResult.textContent).toContain('Left');

    middleButton.click();
    expect(delegationResult.textContent).toContain('Middle');

    rightButton.click();
    expect(delegationResult.textContent).toContain('Right');

    downButton.click();
    expect(delegationResult.textContent).toContain('Down');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('handleDelegation - the event listener was not added to the buttons so they can be removed without issue', () => {
    const delegationContainer = document.querySelector('#delegation');
    document.querySelector('#up').remove();
    document.querySelector('#left').remove();
    document.querySelector('#middle').remove();
    document.querySelector('#right').remove();
    document.querySelector('#down').remove();

    delegationContainer.innerHTML = `
    <button id="up" class="grid-item">Up</button>
    <button id="left" class="grid-item middle">Left</button>
    <button id="middle" class="grid-item middle main">Middle</button>
    <button id="right" class="grid-item middle">Right</button>
    <button id="down" class="grid-item">Down</button>
    `;

    const upButton = document.querySelector('#up');
    const leftButton = document.querySelector('#left');
    const middleButton = document.querySelector('#middle');
    const rightButton = document.querySelector('#right');
    const downButton = document.querySelector('#down');
    const delegationResult = document.querySelector('#delegation-result');

    delegationContainer.click();
    expect(delegationResult.textContent).toBe('');

    upButton.click();
    expect(delegationResult.textContent).toContain('Up');

    leftButton.click();
    expect(delegationResult.textContent).toContain('Left');

    middleButton.click();
    expect(delegationResult.textContent).toContain('Middle');

    rightButton.click();
    expect(delegationResult.textContent).toContain('Right');

    downButton.click();
    expect(delegationResult.textContent).toContain('Down');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('addNewRandomNumber - creates a new li with a random number on each click', () => {
    const randomNumButton = document.querySelector('#add-random-num');
    const numbersUl = document.querySelector('#random-numbers');

    expect(numbersUl.children.length).toBe(0);

    randomNumButton.click();
    expect(numbersUl.children.length).toBe(1);
    expect(numbersUl.children[0].matches('li')).toBeTruthy();

    randomNumButton.click();
    expect(numbersUl.children.length).toBe(2);
    expect(numbersUl.children[1].matches('li')).toBeTruthy();

    randomNumButton.click();
    expect(numbersUl.children.length).toBe(3);
    expect(numbersUl.children[2].matches('li')).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('addNewRandomNumber - each new li is only filled with a random number', () => {
    const randomNumButton = document.querySelector('#add-random-num');
    const numbersUl = document.querySelector('#random-numbers');

    randomNumButton.click();
    randomNumButton.click();
    randomNumButton.click();

    expect(Number(numbersUl.children[0].textContent.trim()) > 0).toBeTruthy();
    expect(Number(numbersUl.children[1].textContent.trim()) > 0).toBeTruthy();
    expect(Number(numbersUl.children[2].textContent.trim()) > 0).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('removes delegation event listener on click', () => {
    const removeDelegationButton = document.querySelector('#remove');
    const delegationContainer = document.querySelector('#delegation');
    const upButton = document.querySelector('#up');
    const leftButton = document.querySelector('#left');
    const middleButton = document.querySelector('#middle');
    const rightButton = document.querySelector('#right');
    const downButton = document.querySelector('#down');
    const delegationResult = document.querySelector('#delegation-result');

    delegationContainer.click();
    expect(delegationResult.textContent).toBe('');

    upButton.click();
    expect(delegationResult.textContent).toContain('Up');

    removeDelegationButton.click();

    leftButton.click();
    expect(delegationResult.textContent).toContain('Up');

    middleButton.click();
    expect(delegationResult.textContent).toContain('Up');

    rightButton.click();
    expect(delegationResult.textContent).toContain('Up');

    downButton.click();
    expect(delegationResult.textContent).toContain('Up');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  afterAll(scoreCounter.export);
});
