const TodoItem = (props) => (
  <p>
    - <b>{props.item.task}</b> |{" "}
    <span className="category">{props.item.category}</span>
  </p>
);

export default TodoItem;
