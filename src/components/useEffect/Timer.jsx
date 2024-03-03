import { useEffect } from "react";

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer");
    }, 1000);
  }, []);

  return (
    <div>
      <span>Timer시작합니다. 콘솔보기</span>
    </div>
  );
}
