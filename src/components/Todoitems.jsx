import './CSS/Todoitems.css' 
import {FaCheck, FaTrash} from 'react-icons/fa'

const Todoitems = ({no, display, text, setTodos, inputRef}) => {
  let editing = true
  const editTodos = (no) => {
  
    if (editing=== true) {
      editing = false
    }
    else if (editing=== false) {
      editing = true
    } 

    let data = JSON.parse(localStorage.getItem("todos"))
    for (let i = 0; i < data.length; i++) {
      if (data[i].text === text && editing === false) {
        inputRef.current.value = data[i].text 
    
      }
      if (data[i].text === text && editing === true) {
        data[i].text = inputRef.current.value
        console.log("the settimeout")
        inputRef.current.value = ""
        setTodos(data)
      }
    }
    
  }
  const deleteTodos = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"))
    data = data.filter((item) => item.no!== no)
    setTodos(data)
  }
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"))
    for (let i = 0; i < data.length; i++ ) {
      if (data[i].no === no) {
        if (data[i].display === "" ) {
          data[i].display = "line-through"
        }
        else {
          data[i].display = ""
        }
        break;
      }
      
    }
    setTodos(data)
  }
  
  return (
    <div className='todositems'>
      <div className= {`todos-container ${display} `} onDoubleClick={() => {editTodos(text)}} >
        <div className="todos-text">{text}</div>
        <div className="todos-check-btn" onClick={() => {toggle(no)}}>
            <FaCheck/>
        </div>
        <div className="todos-delete-btn" onClick={() => {deleteTodos(no)}}>
            <FaTrash/>
        </div>
      </div>
    </div>
  )
}

export default Todoitems
