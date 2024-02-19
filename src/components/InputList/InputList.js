import React from 'react';
import './InputList.css';
// import DeleteButton from '../DeleteButton/DeleteButton';
function InputList({ items, onDelete, onToggle }) {
 const handleDelete = (index) => {
    console.log(index);
    onDelete(index);
 };
  return (
    <div className="input-list">
      <h2>Today's to-do list</h2>
      <ul className="item-container">
        {items.map((item, index) => (
          <div className="input-items" key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onToggle(index)}
            />
            <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>{item.text}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
           </div>
        ))}
      </ul>
       {/* <div>
         <div class="checkbox-wrapper">
        <input id="_checkbox-26" type="checkbox"/>
        <label for="_checkbox-26">
          <div class="tick_mark"></div>
         </label> */}
        {/* </div>
        Item 1
        {/* <DeleteButton style={{float:'inline-end'}} /> */}
    </div>
    
  );
}

export default InputList;
