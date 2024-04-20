import React from 'react'

function Header() {
  const  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  const today=new Date();
  return (
    <div className='h-10 relative left-5 top-6 md:left-2'>
        <h1 className='  font-roboto  text-lg text-blue-600'>TaskMaster</h1>
        <p> {days[today.getDay()]}</p>
        <p>{today.getDate()}th {monthNames[today.getMonth()]},{today.getUTCFullYear()}</p>
    </div>
  )
}

export default Header;