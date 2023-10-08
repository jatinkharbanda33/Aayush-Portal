import React, { useRef } from 'react';
import './StartupxList.scss';
const ListItem = ({ list }) => (
  <div className="horizontal-scrollable">
    {list.map(item => (
      <div key={item.id} className="item">
        {item.name}
      </div>
    ))}
  </div>
);

const StartupxList = () => {
  const list = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 1' },
    { id: 4, name: 'Item 2' },
    { id: 5, name: 'Item 1' },
    { id: 6, name: 'Item 2' },
    { id: 7, name: 'Item 1' },
    { id: 8, name: 'Item 2' },
    { id: 9, name: 'Item 1' },
    { id: 10, name: 'Item 2' },
    { id: 11, name: 'Item 1' },
    { id: 12, name: 'Item 2' },
    { id: 13, name: 'Item 1' },
    { id: 14, name: 'Item 2' },
    { id: 15, name: 'Item 1' },
    { id: 16, name: 'Item 2' },
    
    // Add more items as required
  ];

  return (
    <div className="StartupxList">
      <ListItem list={list}
       />
    </div>
  );
};

export default StartupxList;
