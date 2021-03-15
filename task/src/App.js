import {useState} from 'react'
import axios from 'axios';
import AddTask from './components/AddTask';
function App() {
  const [tasks,setTasks]=useState([]);
  
  const addTask = async(task) => {
    const res=await axios.post('https://st-test-api.herokuapp.com/testForm',{
      data:task
    })
    const responseData=await res.data  
    console.log(responseData)
     setTasks([...tasks,responseData]);
  }

  return (
    <div className="App">
      <AddTask onAdd={addTask}/>
    </div>
  );
}

export default App;
