import { TaskRow } from "../taskRow/TaskRow";

export const TableTask = ({ task, toggleTask}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {
            task.map(task => (
                <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
        ))}
      </tbody>
    </table>
  );
};
