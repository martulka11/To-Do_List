import TaskDetails from "../../components/task/TaskDetails";
import { MongoClient, ObjectId } from "mongodb";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const TaskDetail = (props) => {
  const router = useRouter();

  async function updatedTaskHandler(enteredTaskData) {
    const response = await fetch("/api/helper", {
      method: "PUT",
      body: JSON.stringify(enteredTaskData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/");
  }

  return (
    <Fragment>
      <TaskDetails
        title={props.taskData.title}
        priority={props.taskData.priority}
        start_date={props.taskData.start_date}
        complete={props.taskData.complete}
        description={props.taskData.description}
        onUpdatedTask={updatedTaskHandler}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {

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

  const tasksCollection = db.collection("tasks");
  const tasks = await tasksCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: tasks.map((task) => ({
      params: {
        taskId: task._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const taskId = context.params.taskId;

  const MONGODB = process.env.REACT_APP_MONGODB

  const client = await MongoClient.connect(
    MONGODB
  );
  const db = client.db();

  const tasksCollection = db.collection("tasks");
  const selectedTask = await tasksCollection.findOne({ _id: ObjectId(taskId) });

  client.close();

  return {
    props: {
      taskData: {
        id: selectedTask._id.toString(),
        title: selectedTask.title,
        priority: selectedTask.priority,
        start_date: selectedTask.start_date,
        complete: selectedTask.complete,
        description: selectedTask.description,
      },
    },
  };
}

export default TaskDetail;
