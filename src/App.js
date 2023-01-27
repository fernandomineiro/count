import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(6);

  return (
    <div className="App">
      <button onClick={()=>setCount(count + 1)}>+</button>
      <button onClick={()=>setCount(count - 1)}>-</button>
      <button onClick={()=>setCount(6)}>resetar</button>
      {count}
   
    </div>
  );
}

export default App;
