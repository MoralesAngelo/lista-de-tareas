import { TaskRow } from "../taskRow/TaskRow";

export const TableTask = ({ task, toggleTask, showCompleted=false }) => {

  const taskTableRow = (doneValue) => {
    return (
      task
      .filter(task => task.done ===doneValue)
      .map(task => (
        <TaskRow task={task} hey={task.name} toggleTask={toggleTask} />
      ))
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>

        {taskTableRow(showCompleted)}
        
      </tbody>
    </table>
  );
};
