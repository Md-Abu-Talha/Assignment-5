1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   
 Ans : "getElementById" is a method it is use to get access of a html elemnt by it's unique id name.

"getElementsByClassName" it is also use to get access of some or more then one html element by those class name.
 It basically use for access many items at once.


 "querySelector" it is methos that can grab the first element in the DOM. It is like a search tool that understands CSS rules. But it can only grab one item at a time on the other hand "querySelectorAll" can grab all elements in the DOM except that both do the same work.


2. How do you **create and insert a new element into the DOM**?

Ans : We have to use document.createElemnt() to create a new element in html. Then we can add text, class, style and so on
at the end we have to use appendChild() or insertBefore()
That's how we can create and insert a new element into the DOM.


3. What is **Event Bubbling** and how does it work?

Ans : Event bubbling is a fundamental concept in JavaScript that explains how events propagate through the DOM.

Event bubbling occurs when an event triggered on a child element automatically propagates upward through its parent and ancestor elements in the DOM tree.


 When we click on a child element (e.g., a <button>) it is called event triggered.
 The event is first handled by the target element (the button), then moves up to it's parent (e.g., a <div>), then to the grandparent (e.g., <body>), and continues up to the root (<html>).


4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans : Event Delegation is a smart event-handling pattern in JavaScript that let's us manage events more especially when dealing with lots of similar elements.

Instead of attaching individual event listeners to multiple child elements, we can attach a single listener to a common parent. That parent listens for events bubbling up from its children and handles them based on the event.target.


It is very useful becouse it makes cleare code, better performance, dynamic content support and many more.



5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans : preventDefault() stop the browser’s default behavior,

 stopPropagation() stop the event from bubbling up.


 preventDefault() affects browser behavior just like stop from a form submittion but stopPropagation() is not affects browser behavior.


stopPropagation() affects DOM events but preventDefault() affects not.

 
