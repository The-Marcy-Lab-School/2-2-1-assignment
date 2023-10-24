# 2.2.1 Assignment - Events

- [2.2.1 Assignment - Events](#221-assignment---events)
  - [Before You Start](#before-you-start)
- [Short answers](#short-answers)
- [Question 1: clickCounterHandler - modify.js](#question-1-clickcounterhandler---modifyjs)
- [Question 2: handleKeydown - modify.js](#question-2-handlekeydown---modifyjs)
- [Question 3: inline to event listener clickCounterHandler - modify.js](#question-3-inline-to-event-listener-clickcounterhandler---modifyjs)
- [Question 4: handleDelegation - modify.js](#question-4-handledelegation---modifyjs)
- [Question 5: addNewRandomNumber - modify.js](#question-5-addnewrandomnumber---modifyjs)
- [Question 6: removing an event listener  - modify.js](#question-6-removing-an-event-listener----modifyjs)
- [Question 7: Do it all from scratch - index.js](#question-7-do-it-all-from-scratch---indexjs)
- [BONUS: research more events](#bonus-research-more-events)

## Before You Start
Now things are *really* getting interesting. You get to add interactivity to your pages! To try and set you on the right path, our `modify.js` has some existing code, but it's not enough! You'll still need to use the DOM manipulation skills from yesterday in order to get everything to work.

So in problem one, we give you a simple empty function and a `main` function to run things in. But it's up to you to grab the button itself and then actually *add* the event listener to it. You must read the tests in order to understand fully what is being asked of you. Reading tests is a crucial skill on the job, so practice it now!

Really think about what the question is asking you to do. Don't be restrained by the code we give you, you are supposed to add more! Study the provided `modify.html` document as well, a lot of the questions make more sense when you see the scaffolding.

# Short answers
Don't forget to do them! They go over bigger concepts than just the code.


# Question 1: clickCounterHandler - modify.js
As you can see in our HTML we have a button `#click-button`. Create a click event listener that uses a function `clickCounterHandler` to track the number of clicks. With each click of the button 2 things should happen:
- update the data-clicks attribute on the button with the right number
- update the text of the button to tell us how many times its been clicked

BE CAREFUL! Read the tests to see *exactly* what the text content should be! Also remember that data attributes come from the HTML as strings.

# Question 2: handleKeydown - modify.js
With a key event listener on the `body`, use `handleKeydown` to track the last key code pressed. Then, modify the text content of the `p` tag with an id of `keydown-tracker`. Check the tests to see *exactly* what the text content of the tag should be. Investigate the `event` to see where you could grab the information you need.

# Question 3: inline to event listener clickCounterHandler - modify.js
You many have noticed there's another button with a `data-clicks` attribute. However, it's using an inline `onclick` function to do this. Keeping the functionality the same as question 1, **edit just this section of the html** to remove the click handler, and in your JS replace it with an event listener using the handler we built in question 1. Check the tests to see exactly what we're looking for.

# Question 4: handleDelegation - modify.js
In the JS code, you'll see there's already the start of some delegation handling. The idea here is that whenever you click a button in the container, the `#delegation-result` span will update with the text of that button.

However, if you click the `div` container, the result will also update. We don't want that of course, it looks weird. So update `handleDelegation` to only update the span's text content if a *button* is clicked.

> Do not cheat and just add click event listeners to each button. We'll completely remake the buttons in the tests. You have to add the listener to the delegation container! (This ability to remove and remake children without causing event issues is actually one of the best features of delegation. Remember that for your own projects...)

# Question 5: addNewRandomNumber - modify.js
This is a fun one. Add a click event listener to the `#add-random-num` button that creates a new `li` with *only* a random number greater than 0 in it. The `li`s should go in the `#random-numbers` `ul`. All of this logic should live in the `addNewRandomNumber` function.

# Question 6: removing an event listener  - modify.js
Lastly, you should know how to remove listeners. There's a button with an id of `#remove`. Attach a click event listener to this button that will remove the delegation click event listener from the `#delegation` container.

# Question 7: Do it all from scratch - index.js
Ok, you got it with some help, now can you do it on your own? We have a blank `index.html` and blank `index.js`. Your job is to:
- fill out the `index.html` with boilerplate code:
  - A `head` tag with a title of `Intro to events`
  - A `body` tag
  - An `h1` with text content of `More Events Practice`
  - A `button` with an id of `add-one` and text content of `Click me to increment!`
  - A `p` tag with an id of `results` and text content of `0` to start
- Link the `index.js` script to this page
- Add a click event listener to the button that increments the `results` counter by `1` with each click
  - Do not add an onclick function, use a listener

Check the tests to make sure you're doing what we're asking for!

# BONUS: research more events
We barely scratched the *surface* of all the events you can use on your pages. If you finish this assignment (and the short answers), we strongly encourage you to look up all the different JS events. Create a new repo and just mess around with them! Remember, you can learn much more on your own through experimentation!
