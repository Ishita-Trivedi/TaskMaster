import {useState} from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TaskList from './components/TaskList';
const App = () => {
  const [taskList, setTaskList] = useState([
    { id: 1, title: 'Task 1', status: 0 },
    { id: 2, title: 'Task 2', status: 0 },
    { id: 3, title: 'Task 3', status: 0 }
  ]);
  const addTask=(taskName)=>{
    setTaskList([...taskList,{id:taskList.length+1,title:taskName,status:'pending'}]);
  }
  const deleteTask=(id)=>{
    setTaskList(taskList.filter((task)=>task.id!==id));
  }
  const updateTask=(id,task)=>{
    setTaskList(taskList.map((t)=>t.id===id?{...t,task}:t));
  }
  return (
    <div className='  overflow-hidden bg-center bg-cover  w-screen h-screen flex-row justify-center' style={{ backgroundImage: 'url(/assets/mountains-1412683.svg)'  }}>
      <Header />
      <SearchBar  onAddTask={addTask} />
      <TaskList taskArray={taskList}onDeleteTask={deleteTask} onUpdateTask={updateTask} />
    </div>
  );
};

export default App;
