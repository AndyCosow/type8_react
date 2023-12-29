import React, {useEffect, useState} from 'react';
import {useStore} from "../store/myStore";

const Progressbar = () => {
    const {counter, setGameOver} = useStore(state => state)
    const [size, setSize] = useState(100)

    useEffect(() => {
        const interval = setInterval(() => {
            setSize(size - 1)
        }, 1000 - (counter * 100));

        if(size <= 0) {
            setGameOver()
        }

        return () => clearInterval(interval);
    }, [size]);

    useEffect(() => {
        setSize(100)
    }, [counter])

    return (
        <div className="progressWrapper">
            <div style={{width: size + "%"}}></div>
        </div>
    );
};

export default Progressbar;