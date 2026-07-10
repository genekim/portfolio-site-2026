import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    
      Vite + React
      Count: {count}
       setCount((c) => c + 1)}>Increment
    
  );
}

export default App;