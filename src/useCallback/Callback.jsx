import { useState, useEffect } from "react";

export default function Callback() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = () => {
    console.log(`sumeFunc : number: ${number}`);
    return;
  };

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  //useCallback 사용해보기

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button onClick={someFunction}>Call someFunc</button>
      <br />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
    </div>
  );
}
