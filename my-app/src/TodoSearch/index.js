import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <input 
        className='TodoSearch' 
        placeholder='Buscar tareas' 
        value={searchValue}
        onChange={onSearchValueChange}
      />      
    </div>
  );
}

export { TodoSearch };