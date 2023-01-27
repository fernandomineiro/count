import React, { useState, useCallback, useEffect } from 'react';


function App() {
  const [count, setCount] = useState(28);
  const [color, setColors] = useState('blue');

 
  const setCor = useCallback(() => {
    count >= 28 ? setColors('red') : setColors('blue')
  }, [count]);


  useEffect(() => {
    setCor()
    
  });



  return (
    <div style={{backgroundColor: color}}>
      <button onClick={()=>setCount(count + 5)}>+</button>
      <button onClick={()=>setCount(count - 5)}>-</button>
      <button onClick={()=>setCount(28)}>resetar</button>
      {count >= 0 ?<div>positivo</div> : <div>negativo</div>}
      {count}
    </div>
  );
}

export default App;
