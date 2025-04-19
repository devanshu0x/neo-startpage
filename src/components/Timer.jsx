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
            <div className="rounded-lg text-5xl mt-4 text-red-50 font-signika">{currTime}</div>
            <div className="text-white/60 absolute top-0 right-0 text-sm">{currDay}</div>
        </div>
        <div className="text-orange-200 text-center text-2xl mt-2 ">{headerLine}</div>
        </>
    )
}
