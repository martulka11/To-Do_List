import { useRef, useState } from "react";
import classes from "./AddTask.module.css";

const AddTask = (props) => {
  const [date, setDate] = useState(Date.now());
  const [priority, setPriority] = useState("low priority");
  const [complete, setComplete] = useState(false);
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const changePriority = (newPriority) => {
    setPriority(newPriority);
  };

  const changeDate = (event) => {
    setDate(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();

    console.log(taskData);

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const taskData = {
      title: enteredTitle,
      priority: priority,
      start_date: date,
      complete: complete,
      description: enteredDescription,
    };

    console.log(taskData);

    props.onAddTask(taskData);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="priority">Priority</label>
        <select
          onChange={(event) => changePriority(event.target.value)}
          value={priority}
          required
          id="priority"
        >
          <option value={"low priority"}>low priority</option>
          <option value={"medium priority"}>medium priority</option>
          <option value={"high priority"}>high priority</option>
        </select>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Start Date</label>
        <input
          type="date"
          required
          id="date"
          value={date}
          onChange={changeDate}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows="10"
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div className={classes.button}>
        <button>Add Task</button>
      </div>
      <input type="hidden" value={complete} id="complete" />
    </form>
  );
};

export default AddTask;
