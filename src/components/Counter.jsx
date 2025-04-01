import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App-header">
      <p>El contador está en: {count}</p>
      <div className="content-buttons">
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)}>Decrementar</button>
      </div>
    </div>
  );
};

export default Counter;
