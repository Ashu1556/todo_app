import React, {useState} from 'react'
import uuid from 'react-uuid'
import  './TodoApp.css'

const TodoApp = () => {

    let defaultState = {
        name: "",
        date: "",
        index: 0,
        id: ""
    }

    const [task, setTask] = useState(defaultState)
    const [itemsarray, setItemsArray] = useState([]);
    const [show, setShow] = useState(false);
    const [check, setCheck] = useState(false);

    const handleclick = () => {
        setShow(!show);
    }

    const handleclick1 = () => {
        setCheck(!check);
    }

    

    const inputChange = (event) => {
     setTask({ ...task, [event.target.name]: event.target.value });
    }

    const addToItemArray = () => {

        let uid = uuid();  
        task.id = uid;
        itemsarray.push(task);
        setItemsArray([...itemsarray]);
    
        setTask(defaultState)
    
    }

    const removeItem = (index) => {
        itemsarray.splice(index, 1);  
        let newArr = []; 
        for (let i = 0; i < itemsarray.length; i++) {
          newArr.push(itemsarray[i]);
        }
        setItemsArray(newArr);
    
    }

    
  return (
    <div>

       
       <button className="main-container" onClick = { handleclick} > Add Todo</button>

       {
        show  && (

        <div className="container">
          <h1>TodoApp</h1>
          <input type={"text"} className={"form-control"} value={task.name} name={"name"} placeholder={"Task Name"} onChange={inputChange} /> <br></br>
          <input type={"date"} className={"form-control"} value={task.date} name={"date"} placeholder={"Task End Date"} onChange={inputChange} /> <br />
          <button className={"btn btn-primary"} onClick={addToItemArray}>Add ToDo </button>
        </div>

        )
       }
          
        

        
        
            {/* <TaskItems data={ele} i={i} />*/}

            {
              itemsarray.map((ele, i) => (

                <div className="container1">
                <li key={ele.id} className="list-group-item" aria-current="true"><strong>Name - </strong>{ele.name}   <strong>Finish Date -</strong> {ele.date}
                  <input type="checkbox" value={check} onChange={handleclick1} /> 
                  <button className={"btn btn-danger"} style={{ marginLeft: "20px" }} onClick={() => removeItem(i)}> Delete </button>
 
                  {/* <input type="checkbox" value={check} onChange={handlechange3} /> */}

                </li>
                </div>


              ))
            }




          



        

        {check && (
        <div className='container2'>
          <ul>
            {/* <TaskItems data={ele} i={i} />*/}

            {
              itemsarray.map((ele, i) => (

                <li key={ele.id} className="list-group-item" aria-current="true"><strong>Name - </strong>{ele.name}   <strong>Finish Date -</strong> {ele.date}
                  



                </li>


              ))
            }




          </ul>



        </div>
      )}

        
           
        
      
    </div>
  )
}

export default TodoApp
