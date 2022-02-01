import {useEffect, useState} from "react";
import {Button, ButtonGroup} from "react-bootstrap";

export default function Timer() {

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [milSeconds, setMilSeconds] = useState(0)

    const [start_stop, setStart_Stop] = useState(false)
    const [showMilSecs, setShowMilSecs] = useState(false)

    const [totalTimeInMilSec, setTotalTimeInMilSec] = useState(3 * 100);

    function milSecondsToTime() {
        setHours(Math.floor(totalTimeInMilSec / (60 * 60 * 100)));

        let divisor_for_minutes = totalTimeInMilSec % (60 * 60 * 100);
        setMinutes(Math.floor(divisor_for_minutes / (60 * 100)));

        let divisor_for_seconds = divisor_for_minutes % (60 * 100);
        setSeconds(Math.ceil(divisor_for_seconds / 100));

        let divisor_for_mil_seconds = divisor_for_minutes % 100;
        setMilSeconds(Math.ceil(divisor_for_mil_seconds))
    }

    function format(milSec){
        const seconds = Math.floor((milSec / 100) % 60);
        const minutes = Math.floor((milSec / 100 / 60) % 60);
        const hours = Math.floor((milSec  / 100 / 3600 ) % 24)
        const milSeconds = Math.floor((milSec % 100))
        return (hours<10 ? '0' + hours : hours) + ' : ' +
               (minutes<10 ? '0' + minutes : minutes) + ' : ' +
               (seconds<10 ? '0' + seconds : seconds) +
               (showMilSecs ? (milSeconds<10 ? ' : 0' + milSeconds : ' : ' + milSeconds) : '');
    }

    const onClickHandleStart = () => {
        setStart_Stop((prev) => !prev)
    }
    const onClickHandleReset = () => {
        setTotalTimeInMilSec(() => 120 * 100)
    }
    const onClickHandleMilSeconds = () => {
        setShowMilSecs((prev) => !prev)
    }

    useEffect(() => {
        let interval_1;
        // console.log('x')
        if (start_stop) {
            interval_1 = setInterval(() => {
                setTotalTimeInMilSec((prev) => prev - 1);
            }, 10)
        }
        return () => clearInterval(interval_1);

    }, [start_stop])

    useEffect(() => {
        // console.log('y')
        if (totalTimeInMilSec >= 0)  milSecondsToTime()
        else return () => setStart_Stop((prev) => !prev)
    }, [totalTimeInMilSec])

    useEffect(() => {
        // console.log('z')
        if (totalTimeInMilSec === 1) return ()=> setStart_Stop((prev) => !prev)
    }, [totalTimeInMilSec])

    return (
        <div className="bg-dark text-white text-center pb-5">
            <h2 className={"pt-5 pb-3"}>
                <span>{hours}</span> : <span>{minutes}</span> : <span>{seconds}</span>{showMilSecs ?
                <span>{' : ' + milSeconds}</span> : null}
            </h2>
            <h3 className={"pb-3"}>
                {format(totalTimeInMilSec)}
            </h3>
            <ButtonGroup>
                {
                    totalTimeInMilSec <= 0
                        ? <Button disabled onClick={onClickHandleStart}>{start_stop ? 'Stop' : 'Start'}</Button>
                        : <Button onClick={onClickHandleStart}>{start_stop ? 'Stop' : 'Start'}</Button>
                }
                <Button variant="secondary" onClick={onClickHandleReset}>Reset</Button>
                <Button variant="info" onClick={onClickHandleMilSeconds}>{showMilSecs ? 'Hide MilSeconds' : 'Show MilSeconds'}</Button>
            </ButtonGroup>
        </div>
    )
}