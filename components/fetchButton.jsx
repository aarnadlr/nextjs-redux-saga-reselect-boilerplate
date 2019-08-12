import React, { useState, useEffect } from 'react';

const FetchButton = () => {
  const [data, setData] = useState({})
  const [fetched, setFetched] = useState(false);

  const handleClick = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setData(json);
      });
    setFetched(true)
    if(fetched){
      setFetched(false)
    }else{
      setFetched(true)
    }
  };

  return (
    <div>
      <button onClick={handleClick}>FETCH</button>

      <div>{fetched && "YOU CLICKED and fetched!"}</div>
      <div>{fetched && data.title}</div>
    </div>
  );
};

export default FetchButton;
