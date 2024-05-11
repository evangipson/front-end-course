# Assignment 3
Create a "to do" application in HTML, CSS, and JavaScript.

## Requirements
- The `<title>` of the document is "Assignment 3".
- There is a CSS `class` for each element, which follows BEM conventions.
- The CSS will use `class` attributes for rules, not HTML elements (with the exception of `html`).
- There is an HTML input with an "Add Todo" button alongside it.
- When the "Add Todo" button is clicked, the input's contents are displayed in a "Todos" list.
- If the HTML input doesn't have any displayable content, don't add the todo and let the user know.
- The title of the "Todos" list reads "X Todos", where X is the total number of todos.
- After clicking "Add Todo", the contents of the input are cleared.
- The HTML contains a `<template>` for displaying a todo.
- The user-created todos have an "X" the user can click to dismiss them.

## Links
- Learn about BEM and why it can be useful on css-tricks: https://css-tricks.com/bem-101/.

## Tips
- Don't create the todos in JavaScript, copy and update the `<template>` instead.
- Use `trim()` to remove spaces from the end of a string.