import {useState} from 'react';

const TaskItem = ({ title,initialStatus }) => {
   const [status, setStatus] = useState(initialStatus);
  // Define the common button class
  const btnClass = 'm-1  hover:border border-slate-400';
  const handleStatusChange = () => {
   setStatus(!status);
  }
  return (
    <div className='w-60 h-10 flex items-center border border-gray-300 rounded-lg m-1 relative'>
      <input onClick={handleStatusChange} id="link-checkbox" type="checkbox" className="w-5 h-5 m-2 bg-gray-100 border-gray-300 rounded focus:ring-pink-200 dark:focus:ring-red-200 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
    
     <li className={`text-xl font-roboto hover:italic text-slate-900 flex-auto ${status ? 'line-through' : ''}`}>
        {title}
        <div   className='absolute right-0 top-0 bottom-0 h-full px-2 flex items-center justify-center'>
          {/* Use the common button class */}
          <button className={btnClass}>✏️</button>
          <button className={btnClass}>✖️</button>
        </div>
      </li>
    </div>
  );
}

export default TaskItem;
