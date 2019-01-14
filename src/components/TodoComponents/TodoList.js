// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

function TodoList(props) {
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo toggleCompleted={props.toggleCompleted} todo={todo} />;
      })}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ),
  toggleCompleted: PropTypes.func
};
export default TodoList;
