import SingleTask from "../task/SingleTask";
import classes from "./AllTask.module.css";

const AllTask = (props) => {

  return (
    <ul className={classes["all-tasks"]}>
      {props.tasks.map((task) => (
        <SingleTask
          key={task.id}
          id={task.id}
          title={task.title}
          priority={task.priority}
          start_date={task.start_date}
          complete={task.complete}
          description={task.description}
          onDeleteTask={props.onDeleteTask}
        />
      ))}
    </ul>
  );
};
export default AllTask;
