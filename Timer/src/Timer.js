import {useEffect, useState} from "react";
import {Button, ButtonGroup} from "react-bootstrap";

export default function Timer(){

    const [hours,setHours] = useState(0)
    const [minutes,setMinutes] = useState(0)
    const [seconds,setSeconds] = useState(0)
    const [milSeconds,setMilSeconds] = useState(0)
    const [start_stop,setStart] = useState(false)
    const [showMilSecs,setShowMilSecs] = useState(false)

    const [totalTimeInMilSec,setTotalTimeInMilSec] = useState(3*100);

    function secondsToTime(){
        setHours(Math.floor(totalTimeInMilSec / (60 * 60 * 100)));

        let divisor_for_minutes = totalTimeInMilSec % (60 * 60 * 100);
        setMinutes(Math.floor(divisor_for_minutes / (60 * 100)));

        let divisor_for_seconds = divisor_for_minutes % (60*100);
        setSeconds(Math.ceil(divisor_for_seconds/100));

        let divisor_for_mil_seconds = divisor_for_minutes % 100;
        setMilSeconds(Math.ceil(divisor_for_mil_seconds))
    }

    const onClickHandleStart = () => {
        setStart((prev)=>!prev)
    }
    const onClickHandleReset= () => {
        setTotalTimeInMilSec(()=>120*100)
    }
    const onClickHandleMilSeconds= () => {
        setShowMilSecs((prev)=>!prev)
    }


    useEffect(()=>{
        if(start_stop){
            const interval_1 = setInterval(()=>{
                setTotalTimeInMilSec((prev)=>prev-1);
            },10)
            return () => clearInterval(interval_1);
        }
    },[start_stop])

    useEffect(()=>{
        const interval_2 = secondsToTime
        if (totalTimeInMilSec >= 0 ) {
            interval_2();
        }
        else {
            return () => {
                clearInterval(interval_2)
                setStart((prev)=>!prev)
            };
        }
    },[totalTimeInMilSec])

    return (
        <>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>{showMilSecs?<span>{':'+milSeconds}</span>:null}
            <ButtonGroup>
                {
                    totalTimeInMilSec<=0
                        ?<Button disabled onClick={onClickHandleStart}>{start_stop?'Stop':'Start'}</Button>
                        :<Button onClick={onClickHandleStart}>{start_stop?'Stop':'Start'}</Button>
                }
                <Button onClick={onClickHandleReset}>Reset</Button>
                <Button onClick={onClickHandleMilSeconds}>{showMilSecs?'Hide MilSeconds':'Show MilSeconds'}</Button>
            </ButtonGroup>
        </>
    )
}