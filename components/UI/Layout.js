import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { useRouter } from "next/router";

function Layout(props) {
  const router = useRouter();

  return (
    <div className={classes.layout}>
      <MainNavigation />
      <div className={classes.view}>
        <div
          className={
            router.pathname == "/tasks-in-progress" ||
            router.pathname == "/" ||
            router.pathname == "/complete-tasks"
              ? classes.header
              : classes.hidden
          }
        >
          <h3 className={classes.title}>Title</h3>
          <h3 className={classes.priority}>Priority</h3>
          <h3 className={classes.status}>Status</h3>
        </div>
        <div>
          <main className={classes.main}>{props.children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
