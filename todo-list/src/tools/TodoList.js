import TodoListItem from './TodoListItem'
import NewTodoForm from "./NewTodoForm";
import './TodoList.css'

const TodoList = ({todos=[{text:'First todo item'}]}) =>(
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo=><TodoListItem todo={todo}/>)}
    </div>
)

export default TodoList;