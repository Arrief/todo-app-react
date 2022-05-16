const DropdownSelect = (props) => (
  <select>
    {props.value.map((category, index) => (
      <option onClick={props.action} key={index} value={category}>
        {category}
      </option>
    ))}
  </select>
);

export default DropdownSelect;
