import React from 'react';
import Dropdown from './Dropdown';

const App = () => {
  const items = ['Shinchan', 'Doraemon', 'Demon Slayer', 'Naruto','One Piece'];

  return (
    <div>
      <h1>Dropdown List</h1>
      <Dropdown items={items} />
    </div>
  );
};

export default App;
