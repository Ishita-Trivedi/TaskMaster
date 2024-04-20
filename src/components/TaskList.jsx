import React from 'react'
import TaskItem from './TaskItem'
const TaskList = ({taskArray,onUpdateTask,onDeleteTask}) => {
  return (
    <div>
     <ul className='list-none flex flex-col items-center'>
        {taskArray.map((task) => (
           
                 <TaskItem key={task.id} title={task.title} status={task.status}/>
        ))}
        </ul>
    </div>
  )
}

export default TaskList