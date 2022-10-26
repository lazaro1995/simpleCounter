import React, { useState, useEffect } from "react";

const Update = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }, []);
  
    return <h1 style={{ color: 'white' }}> {count}</h1>;
  };
  
  export default Update;