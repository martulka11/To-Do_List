import classes from "./TaskDetils.module.css";
import { useRouter } from "next/router";

const TaskDetail = (props) => {
  const router = useRouter();
  const { taskId } = router.query;

  function finishHandler() {
    const data = {
      id: taskId,
      title: props.title,
      priority: props.priority,
      start_date: props.date,
      complete: props.complete,
      description: props.enteredDescription,
    };

    props.onUpdatedTask(data);
  }

  function getComplete(props) {
    if (props.complete === true) {
      return "./check.png";
    }
    return "./work-in-progress.png";
  }

  return (
    <div className={classes.container}>
      <h1>{props.title}</h1>
      <h3>{props.priority}</h3>
      <h3>{props.start_date}</h3>
      <img src={getComplete(props)} alt="icon" />
      <p>{props.description}</p>
      {!props.complete && (
        <div className={classes.button}>
          <button onClick={finishHandler}>Finish</button>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;
