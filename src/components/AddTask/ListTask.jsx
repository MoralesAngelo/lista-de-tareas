import { FormTask } from '../formOfTask/FormTask'
import { TableTask } from '../tableTask/TableTask'
import { useTask } from '../../hooks/useTask'


 export const ListTask = () => {
  const {addTask, taskItems, toggleTask } = useTask()


  return <>
  
    < FormTask addTask={addTask}/>
    < TableTask task={taskItems} toggleTask={toggleTask}/>
    
    
    </> 
  


    }
