import { FormTask } from "../formOfTask/FormTask";
import { TableTask } from "../tableTask/TableTask";
import { useTask } from "../../hooks/useTask";

export const ListTask = () => {
  const { addTask, taskItems, toggleTask, showCompleted=true } = useTask();
  

  return (
  
  <div>

        <FormTask addTask={addTask} />
        <TableTask task={taskItems} toggleTask={toggleTask} />
        <TableTask task={taskItems} toggleTask={toggleTask} showCompleted={showCompleted} />

    </div>
  )
}


        
