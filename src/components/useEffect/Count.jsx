import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  //렌더링될 때마다 매번 실행됨
  useEffect(() => {
    console.log("렌더링 기");
  });

  return (
    <div>
      <button onClick={handleCountUpdate}>UPDATE</button>
      <span>COUNT: {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>NAME: {name}</span>
    </div>
  );
}
