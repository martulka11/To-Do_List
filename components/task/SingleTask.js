import { useRouter } from "next/router";
import classes from "./SingleTask.module.css";

const SingleTask = (props) => {
  const router = useRouter();

  const showDetailHandler = () => {
    router.push("/" + props.id);
  };

  function getStatusText(props) {
    if (props.priority == "low priority") {
      return "color1";
    } else if (props.priority == "medium priority") {
      return "color2";
    }
    return "color3";
  }

  function getComplete(props) {
    if (props.complete === true) {
      return "./check.png";
    }
    return "./work-in-progress.png";
  }


  function deleteTask() {
    const dataId = props.id;

    props.onDeleteTask(dataId);
  }

  return (
    <li className={classes.row}>
      <div className={classes.title}>
        <h3>{props.title}</h3>
      </div>
      <div className={getStatusText(props)}>
        <h3>{props.priority}</h3>
      </div>
      <div className={classes.status}>
        <img src={getComplete(props)} alt="icon" />
      </div>
      <div className={classes.button}>
        <button onClick={showDetailHandler}>Show Details</button>
      </div>
      <div className={classes.delete}>
        <img onClick={deleteTask} src="/delete.png" alt="delete" />
      </div>
    </li>
  );
};

export default SingleTask;
