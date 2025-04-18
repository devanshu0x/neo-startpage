import { format } from "date-fns";
import { useState , useEffect} from "react"

export default function Timer(){
    const [date,setDate]=useState(()=>new Date());
    useEffect(()=>{
        let timeoutId=null
        const tick=()=>{
            setDate(new Date());
            timeoutId=setTimeout(tick,1000);
        }
        tick();
        return ()=>clearTimeout(timeoutId);

    },[])
    const headerLine="Miracles only happen to those who never give up"
    const currDay= format(date,"d MMM yyyy");
    const currTime=format(date,"HH : mm : ss")
    return(
        <>
        <div className="flex relative justify-center items-center">
            <div className="text-4xl mt-4 text-white/90 font-signika">{currTime}</div>
            <div className="text-white/60 absolute top-0 right-0 text-sm">{currDay}</div>
        </div>
        <div className="text-red-500/80 text-center text-xl mt-2 ">{headerLine}</div>
        </>
    )
}
