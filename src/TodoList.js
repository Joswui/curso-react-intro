import './TodoList.css'

function Todolist({children}) {
    return(
      <ul className="TodoList">
        {children}
      </ul>
    );
  }
  export { Todolist };