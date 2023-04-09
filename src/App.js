import './App.css';
import React from 'react';

function App() {

  const[listItems, setListItems] = React.useState([]);

  let todoListItems = [
    'Laundry',
    'Dishes',
    'Sweep the floor',
    'Feed my cats',
    'Clean the shower',
    'Random task A',
    'Another task',
    'Another task'
  ];

  return (
    <div>
      <ul>
        {
          listItems.map((item, index) => {
            return (<li key={index}>{item}</li>)
          })
        }
      </ul>

       
      <input 
        onChange={(event) => {
          setListItems([event.target.value])
          console.log(event.target.value)
      }}
      />
    </div>
  );
}

export default App;
