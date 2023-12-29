import React, {useState} from 'react';
import {useStore} from "../store/myStore";

const WrapPresent = () => {
    const {counter, wrapping, removeWrappingItem, recipe, counterAdd} = useStore(state => state)
    const [error, setError] = useState("")

    function checkPresent() {
        let good = true

        wrapping.map(x => {
            if(!recipe.includes(x)) {
                good = false
            }
        })

        if(good) {
            counterAdd()
        } else {
            setError("BAD RECIPE MY LITTLE ELF")
        }
    }


    return (
        <div>
            <h3>Presents wrapped {counter}</h3>
            <div className="itemsGrid">
                {wrapping.map((x, i) => <div onClick={() => removeWrappingItem(i)} key={i}>{x}</div>)}
            </div>
            {error && <div>{error}</div>}
            <div className="mainButton" onClick={checkPresent}>COMPLETE</div>
        </div>

    );
};

export default WrapPresent;