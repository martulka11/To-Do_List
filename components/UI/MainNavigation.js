import Link from "next/link";
import { useRouter } from "next/router";

function MainNavigation() {
  const router = useRouter();

  return (
    <div className="container">
      <div className="sidebar">
        <div className="container-header">
          <div className={"sidebar__highlight"}>TASK</div>
        </div>
        <div className="container-link">
          <Link className="containerLink" href="/">
            <a
              className={
                router.pathname == "/"
                  ? "containerLink-active"
                  : "containerLink"
              }
            >
              <img src="./checklist.png" alt="all-task" />
              <span>
                <i className="fas fa-arrow-right"></i> All Tasks
              </span>
            </a>
          </Link>
          <Link className="containerLink" href="/complete-tasks">
            <a
              className={
                router.pathname == "/complete-tasks"
                  ? "containerLink-active"
                  : "containerLink"
              }
            >
              <img src="./clipboard.png" alt="all-task" />
              <span>
                <i className="fas fa-arrow-right"></i> Complete Tasks
              </span>
            </a>
          </Link>

          <Link className="containerLink" href="/tasks-in-progress">
            <a
              className={
                router.pathname == "/tasks-in-progress"
                  ? "containerLink-active"
                  : "containerLink"
              }
            >
              <img src="./stopwatch.png" alt="all-task" />
              <span>
                <i className="fas fa-arrow-right"></i>Tasks in progress
              </span>
            </a>
          </Link>

          <Link className="containerLink" href="/new-task">
            <a
              className={
                router.pathname == "/new-task"
                  ? "containerLink-active"
                  : "containerLink"
              }
            >
              <img src="./notes.png" alt="all-task" />
              <span>
                <i className="fas fa-arrow-right"></i> Add Task
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
