import { format } from "date-fns";
import { useState, useEffect } from "react";

export default function Timer() {
  const [date, setDate] = useState(() => new Date());
  useEffect(() => {
    let timeoutId = null;
    const tick = () => {
      setDate(new Date());
      timeoutId = setTimeout(tick, 1000);
    };
    tick();
    return () => clearTimeout(timeoutId);
  }, []);
  const headerLine = "Miracles only happen to those who never give up";
  const currDay = format(date, "d MMM yyyy");
  const currTime = format(date, "HH:mm:ss");
  const [hours, minutes, seconds] = currTime.split(":");
  return (
    <>
      <div className="mt-4 mb-2 flex relative justify-center items-center">
        <div className="text-gray-400 absolute top-0 right-5 text-xs">
          {currDay}
        </div>
       
          <div className="text-5xl text-gray-400 tracking-widest mb-2">
            <span>{hours}</span>
            <span className="text-blue-300">:</span>
            <span>{minutes}</span>
            <span className="text-blue-300">:</span>
            <span>{seconds}</span>
          </div>
        </div>
      
      <p className="text-blue-200 tracking-wide text-md italic text-center">"{headerLine}"</p>
    </>
  );
}
