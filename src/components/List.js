
import React from 'react';
import '../css/List.css';



const List = props => (
  <ul className="collection" id='listDo'>
    {
      props.items.map((item, index) => <li className="collection-item" key={index}>{item}</li>)
      
    }

    
  </ul>
);

export default List;