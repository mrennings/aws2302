import { useEffect, useState } from "react";

export function Counter() {
    const [ count, setCount ] = useState(0);
    const addTwo = () => {
        setCount(count + 2);
    }

    return ( 
        <div className="counter">
            <h2>Counter</h2>
            <h3 className="count">{count}</h3>
            <button onClick={ addTwo }>Click Me</button>
        </div>
    );
}


export function Uhrzeit() {
    const [ time, setTime ] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000);
         return () => {
      clearInterval(timer);
    };
    });


    return <p  className="uhrzeit" >{time.toLocaleTimeString()}</p>
}

export function Uhrzeit1() {
    const [ time, setTime ] = useState(Date.now);

    useEffect(() => {

    });

    return <p className="uhrzeit">{time}</p>
}