import React from "react";
import PropTypes from "prop-types";
function Todo(props) {
  const { toggleCompleted, todo } = props;

  return (
    <p
      className={todo.completed ? "completed" : null}
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
      onClick={e => toggleCompleted(todo.id)}
    >
      {todo.task}
    </p>
  );
}

Todo.propTypes = {
  todo: PropTypes.object
  // todo: PropTypes.shape({
  //   task: PropTypes.string,
  //   id: PropTypes.number,
  //   completed: PropTypes.bool
  //})
};

export default Todo;
