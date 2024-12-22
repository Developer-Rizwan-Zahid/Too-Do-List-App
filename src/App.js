import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

const App = () => {
 
  const [input, setinput] = useState('')
  const [list, setList] = useState([])
  const [update, setUpdate] = useState()
  const [click,setClick] = useState(false)

 
  function inputHandle(e) {
    setinput(e.target.value)
  }

  function handlButton() {
    setList([...list, input])
    setinput('')
    }
    function handlUpdate() {
      list.splice(update, 1, input)
      setinput('')
      setClick(false)
      }
    function handlDelete(id) {
      const filterList = list.filter((meraData) => meraData !== list[id])
      setList(filterList)   
    }
    const handlEdit = (id) => {
      setinput(list[id]);
      setUpdate(id);
      setClick(true);
    }
  return (
    <>
    <div className="heading">
       <h1>To do App List</h1>
    </div>
      <div className="container">
        <div className="input-box">
          <input type="text" placeholder='Enter a Task' value={input} onChange={(e) =>inputHandle(e)}/> 
         {click ?  <button onClick={handlUpdate}>Update Task</button> :  
         <button className='btn' onClick={handlButton}>Add Task</button>
         }
        </div>
        <div className="list">
          <ul>{list.map((myitem,id)=>
            <li>{myitem} 
            <div className='icon'>
            <i onClick={()=>handlEdit(id)}><FontAwesomeIcon className='edit' icon={faPenToSquare}/></i>
            <i onClick={()=>handlDelete(id)}><FontAwesomeIcon className='delete' icon={faTrash}/></i>
            </div>
            </li>
            )}</ul>
        </div>
      </div>
    </>
  )
}

export default App
