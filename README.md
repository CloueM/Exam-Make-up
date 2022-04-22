# 1620_Exam_makeup
Starter code for the CIT 1620 exam

Question. What is event Delegation? Why is it important?

Event delegation is a pattern used to manage events more effectively. Instead of adding an event listener to every comparable element, we can add an event listener to a parent element and use the .target property of the event object to fire an event on a specific target using the event object's target property.

Delegating an event handler on a container element manages an event that bubbles and only trigger the event handler's functionality if the event occurred on a part inside the container that fits specific criteria. This may make it easier to handle events that occur on items inside the container.

Consider the following scenario: you wish to handle a click on any table cell in a large table. A loop might be written to connect a click handler to each cell...or a click handler could be connected to the table, and event delegation used to activate it just for table cells (and not table headers or the whitespace within a row around cells, etc.).

In addition, while adding and removing items from the container, you won't have to bother about adding and deleting event handlers on those elements; you can hook the event on the container and deal with it as it bubbles up from there.# Exam-Make-up
