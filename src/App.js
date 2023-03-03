import "./App.css";
import AddTask from "./components/tasks/AddTask";
import EditTask from "./components/tasks/EditTask";
import TaskList from "./components/tasks/TaskList";
import Task from "./components/tasks/Task";

function App() {
  return (
    <div className="App">
      <AddTask />
      <EditTask />
      <TaskList />
      <Task />
    </div>
  );
}

export default App;
