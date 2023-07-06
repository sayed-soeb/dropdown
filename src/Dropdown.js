import React, { useState } from 'react';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
        <div className='inside'>
        <h1>Select From Dropdown</h1>
      {!selectedItem ? (
        <button className="dropdown-button" onMouseEnter={toggleDropdown}>
          Dropdown
        </button>
      ) : (
        <button className="dropdown-button" onMouseEnter={toggleDropdown}>
          {selectedItem}
        </button>
      )}
      </div>
      {isOpen && (
        <div className='list'>
        <ul className="dropdown-list">
          {items.map((item) => (
            <ul key={item} onClick={() => handleItemClick(item)}>
              {item}
            </ul>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
