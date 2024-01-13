import { useEffect, useRef, useState } from 'react'
import './CSS/Todos.css'
import Todoitems from './Todoitems'
import {FaPlus} from 'react-icons/fa'

let count = 0
const Todos = () => {
    const [todos, setTodos] = useState([])
    let inputRef = useRef(null)
    const add = () => {
        if (inputRef.current.value != "") {
            setTodos([...todos,{no:count++, text:inputRef.current.value, display: ""}] )
            inputRef.current.value = ""
        }
      

    }
    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")))
        count = JSON.parse(localStorage.getItem("todos_count"))
    }, [])

    useEffect(() => {
        setTimeout( () => {
            console.log(todos)
            localStorage.setItem("todos", JSON.stringify( todos))
            localStorage.setItem("todos_count", JSON.stringify( count))
        }, 10)

    })

  return (
    <div className='container'>
    <div className="todos-header">
        <h3>My Todos</h3>
    </div>
    <div className="add-todos">
        <input type="text" ref={inputRef} placeholder='Enter your Tasks' className='add-input' />
        <div className="add-btn" onClick={()=> {add()}} >
            <FaPlus/>
        </div>
    </div>
    <div className="todo-list">
        {todos.map((item, index) => {
            return <div className="overal"><Todoitems no = {item.no} key={index} text = {item.text} display = {item.display} setTodos={setTodos} inputRef={inputRef} />  </div> 
        })}
    </div>

    </div>
  )
}

export default Todos
