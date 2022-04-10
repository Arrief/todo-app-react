import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Categories from './data/Categories';
import DropdownSelect from './components/DropdownSelect';
import FilterSelection from './components/FilterSelection';
import InitialTodos from './data/InitialTodos';
import TodoItem from './components/TodoItem';
import Welcome from './components/Welcome';

function App() {
  // complete array of all todos, initial examples + later user input
  let [listOfTodos, setListOfTodos] = useState(InitialTodos);
  // single todo object containing task & category
  let [todo, setTodo] = useState({});
  // single task set by user
  let [task, setTask] = useState("")
  // single category selected by user from dropdown menu
  let [category, setCategory] = useState("");
  // category of todos to be display, initially "All"
  let [displayCategory, setDisplayCategory] = useState("All");
  // state array containing only todos that match a certain category
  let [todosFiltered, setTodosFiltered] = useState([]);
  // state & function to change from welcome screen to todo list
  let [screen, setScreen] = useState("welcome");
  const changeScreen = () => setScreen("displayTodos");

  // fn to set state for task when user types input
  const handleChange = (event) => {
    setTask(event.currentTarget.value);
  };

  // fn to set state for category when user selects dropdown option
  const handleCategory = (event) => {
    setCategory(event.currentTarget.value);
  };

  // fn to create new todo when user submits input, then add new todo to listOfTodos and clear task/input
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo({task: task, category: category});
    setListOfTodos([...listOfTodos, todo]);
    setTask("");
    setCategory("");
  };

  // fn to apply filter option for displaying only todo items of the specified category
  const handleFilter = (event) => {
    let selectedFilter = event.currentTarget.innerHTML;

    // since there is no "All" category, this condition displays the whole listOfTodos, when the user selects option "All"; otherwise active by default
    if(selectedFilter === "All") {
      return setDisplayCategory("All");
    }

    let categoryToDisplay = listOfTodos.filter(element => element.category === selectedFilter);
    // since all elements in the array have the same category after filter, we only need first one to get the category value/name
    setDisplayCategory(categoryToDisplay[0].category);
    setTodosFiltered(categoryToDisplay);
  };

  const deleteTodo = (itemTodo) => {
    let indexDelete = listOfTodos.findIndex((element) => element === itemTodo);
    let copyListOfTodos = [...listOfTodos];
    copyListOfTodos.splice(indexDelete, 1);
    setListOfTodos(copyListOfTodos);
  };

  const deleteTodoFiltered = (itemTodo) => {
    let indexFiltered = todosFiltered.findIndex((element) => element === itemTodo);
    let copyTodosFiltered = [...todosFiltered];
    copyTodosFiltered.splice(indexFiltered, 1);
    setTodosFiltered(copyTodosFiltered);
    deleteTodo(itemTodo);
  };

  return (
    <div className="App">
      {
        screen === "welcome" && 
        <Welcome action={changeScreen} text="Get started!" />
      }
      {
        screen === "displayTodos" && (
          <>
          <h1>Wild ToDo</h1>
          <section>
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} value={task}  placeholder="to do..."></input>
              <DropdownSelect action={handleCategory} value={Categories}/>
              <Button text="Add a ToDo"/>
            </form>
          </section>

          <div>
            <h3>List of your ToDos</h3>
            <section className="display-section">
              <div>
                {displayCategory === "All"
                    ? listOfTodos.map((item, index) => (
                      <div className='todo-item' key={index}>
                        <TodoItem item={item} />
                        <Button action={() => deleteTodo(item)} text="DONE!" />
                      </div>
                    ))
                    : todosFiltered.map((item, index) => (
                      <div className='todo-item' key={index}>
                        <TodoItem item={item} />
                        <Button action={() => deleteTodoFiltered(item)} text="DONE!" />
                      </div>
                    ))
                }
              </div>
              <FilterSelection action={handleFilter}/>
            </section>
          </div>
          </>
        )
      }
    </div>
  );
}

export default App;
