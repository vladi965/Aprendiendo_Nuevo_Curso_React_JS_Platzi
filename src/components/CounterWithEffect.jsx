import { useState, useEffect } from "react";

const CounterWithEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`El contador cambio: ${count}`);
  }, [count]);

  return (
    <div className="App-header">
      <p>El contador está en: {count}</p>
      <div className="content-buttons">
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
      </div>
    </div>
  );
};

export default CounterWithEffect;
