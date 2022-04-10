import Categories from "../data/Categories";

const FilterSelection = (props) => (
  <div className='filter-selection'>
    <h3>Filter categories</h3>
    <hr />
    <ul>
      <li onClick={props.action}>All</li>
      {Categories.map((element, index) => (
        <li onClick={props.action} key={index}>{element}</li>
      ))}
    </ul>
  </div>);

  export default FilterSelection;