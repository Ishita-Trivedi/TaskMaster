import React, { useState } from 'react';
import Input from './components/Input/Input.js';
import InputList from './components/InputList/InputList.js';
import './App.css';
function App() {
  const [items, setItems] = useState([]);
  function handleItemInput(item){
      console.log('Adding item:', item);
    setItems([...items, {text:item,checked:false}]);
  }
  const handleDelete=(index)=>{
    // Filter out the item at the specified index
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };
   const handleToggle = (index) => {
    // Toggle the checked status of the item at the specified index
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };
  return (
    <div className="App">
     <div className="App-header">
     {/* <h1>To-Day</h1> */}
     {/* //pass the handleItemInput function to the Input component as a prop */}
     console.log('started app');
        <Input handlerItemInput={handleItemInput} />
      </div>
      <div className="App-content">
      console.log("fsdbmnfa");
       <InputList items={items} onDelete={handleDelete} onToggle={handleToggle}/>
      </div>
    </div>
  );
}

export default App;