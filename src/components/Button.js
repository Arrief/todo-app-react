const Button = (props) => (
  <button className="button-done" onClick={props.action}>
    {props.text}
  </button>
);

export default Button;
