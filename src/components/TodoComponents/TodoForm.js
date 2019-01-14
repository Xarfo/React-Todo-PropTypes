import React from "react";
import PropTypes from "prop-types";

function TodoForm(props) {
  return (
    <form>
      <input
        value={props.newTodoText}
        type="text"
        onChange={props.handleChanges}
        name="newTodoText"
      />
      <input type="radio" checked={props.isChecked} />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear completed</button>
    </form>
  );
}

TodoForm.propTypes = {
  isChecked: PropTypes.bool
};
export default TodoForm;
