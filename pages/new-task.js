import AddTask from "../components/task/AddTask";
import { useRouter } from "next/router";

const NewTaskPage = () => {
  const router = useRouter();

  async function addTaskHandler(enteredTaskData) {
    const response = await fetch("/api/helper", {
      method: "POST",
      body: JSON.stringify(enteredTaskData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  }

  return <AddTask onAddTask={addTaskHandler} />;
};

export default NewTaskPage;
