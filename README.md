# Assignment 2: Handling Events Practice

Now things are *really* getting interesting. You get to add interactivity to your pages!

# Question 1: clickCounterHandler - modify.js
As you can see in our HTML we have a button `#click-button`. Create a click event listener that uses a function `clickCounterHandler` to track the number of clicks. With each click of the button 2 things should happen:
- update the data-clicks attribute with the right number
- update the text of the button to tell us how many times its been clicked

BE CAREFUL! Read the tests to see *exactly* what the text content should be! Also remember that data attributes come from the HTML as strings.

# Question 2: handleKeydown - modify.js
There's a `p` tag with an id of `keydown-tracker`. With a key event listener on the `body`, use `handleKeydown` to track the last key code pressed. Check the tests to see what the text content of the tag should be. Investigate the `event` to see where you could grab the information you need.

# Question 3: inline to event listener clickCounterHandler - modify.js
You many have noticed there's another button with a `data-clicks` attribute. However, it's using an inline `onclick` function to do this. Keeping the functionality the same as question 1, **edit just this section of the html** to remove the click handler, and in your JS replace it with a listener. Remember, functionality should be the same (except for the starting text value of the button). Check the tests to make sure you know what to do!

# Question 4: handleDelegation - modify.js
In the JS code, you'll see there's already the start of some delegation handling. The idea here is that whenever you click a button in the container, the `#delegation-result` span will update with the text of that button.

However, if you click the `div` container, the result will also update. We don't want that of course, it looks weird. So update `handleDelegation` to only update the span's text content if a *button* is clicked.

Do not cheat and just add click event listeners to each button. We'll completely remake the buttons in the tests. You have to add the listener to the delegation container! (This ability to remove and remake children is actually one of the best features of delegation, remember that for your own projects...)

# Question 5: addNewRandomNumber - modify.js
This is a fun one. Add a click event listener to the `#add-random-num` button that creates a new `li` with *only* a random number greater than 0 in it. The `li`s should go in the `#random-numbers` `ul` of course. All of this logic should live in the `addNewRandomNumber` function.

# Question 6: removing an event listener
Lastly, you need to know how to remove listeners. There's a button with an id of `#remove`. Attach a click event listener to this button that will remove the delegation click event listener from the `#delegation` container.

This one is a little tricky, as it's actually easier to define it inline in `main` as opposed to it's own function above. But do you know why?

# SHORT ANSWERS
There are a few, don't forget to do them please!

# BONUS: research more events
We barely scratched the *surface* of all the events you can use on your pages. If you finish this assignment (and the short answers), we encourage you strongly to look up all the different JS events. Create a new repo and just mess around with them! Remember, you can learn much more on your own through experimentation!