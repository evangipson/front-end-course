/* query the HTML document for the "Add Todo" button. */

/**
 * Updates the todo list title with the amount of
 * todos that have been added.
 */
function updateTodoTitle() {
	/* if there are todos, count the number of todos,
	 * and display that count in the todo list title.
	 * 
	 * if there are no todos, clear out the todo list
	 * title. */
};

/**
 * Removes a todo from the list of added todos.
 */
function removeTodo() {
	/* remove the todo which the remove
	 * button was clicked for. */
};

/**
 * Creates a todo by cloning a template then adding
 * that clone to the todo list.
 * @param {string} todoMessage the contents to display
 * for the todo.
 */
function makeTodo(todoMessage) {
	/* use the todoMessage parameter that is passed
	 * into this function to populate the text of a
	 * clone of the todo template.
	 * 
	 * make sure the remove button for the clone can
	 * use removeTodo() to remove the clone when it
	 * is clicked. 
	 * 
	 * add the clone of the todo template to the todo
	 * list. */
};

/**
 * Adds a todo to the list of todos, and updates the
 * todo list title. Also stops the user from adding
 * todos with no content.
 */
function addTodo() {
	/* use makeTodo() and updateTodoTitle() to add a
	 * todo to the todo list.
	 *
	 * let the user know if they are creating a blank
	 * todo. */
};

/* add the event listener to run addTodo()
 * when the "Add Todo" button is clicked. */