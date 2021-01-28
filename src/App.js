
import Header from './components/Header'
import Tasks from './components/Tasks'
import React,{useState} from 'react'

const App=()=> {
  const [tasks, setTasks] = useState(
    [
            {
                id:'1',
                text:'coding',
                day:'Feb 5th at 2:00PM',
                reminder:true
                },
                {
                    id:'2',
                    text:'eating',
                    day:'Feb 5th at 7:00PM',
                    reminder:true
                    },
                    {
                        id:'3',
                        text:'sleeping',
                        day:'Feb 5th at 11:00PM',
                        reminder:true
                        }
                    ]
    
        )
        //delete task
    const deleteTask = (id) =>{
      setTasks(tasks.filter((task)=>task.id!== id))
    }

    //toggle reminder
    const toggleReminder = (id) =>{
      //if statement
      setTasks(tasks.map((task)=>task.id === id ? {...task,reminder:!task.reminder} :task))
    }
  return (
    <div className="container">
     <Header title="Task Tracker" />
    {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: 'No tasks available.'}
    </div>
  );
}

export default App;
