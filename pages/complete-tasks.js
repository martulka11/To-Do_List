import { Fragment } from "react";
import { MongoClient } from "mongodb";
import AllTask from "../components/task/AllTask";

const CompleteTask = (props) => {
  return (
    <Fragment>
      {props.tasks.length > 0 && <AllTask tasks={props.tasks} />}
      {props.tasks.length === 0 && (
        <div className="no-found">
          <h2>No found tasks</h2>
        </div>
      )}
    </Fragment>
  );
};

export async function getStaticProps() {

  const MONGODB = process.env.REACT_APP_MONGODB

  let client;

  try {
    client = await MongoClient.connect(
      MONGODB
    );
  } catch (error) {
    res.status(500).json({ message: "Could not connect to database" });
    return;
  }
  const db = client.db();

  const taskCollection = db.collection("tasks");
  const tasks = await taskCollection.find({ complete: true }).toArray();

  client.close();

  return {
    props: {
      tasks: tasks.map((task) => ({
        title: task.title,
        priority: task.priority,
        start_date: task.start_date || null,
        complete: task.complete || null,
        id: task._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default CompleteTask;
