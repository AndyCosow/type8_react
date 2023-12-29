import React from 'react';
import {useStore} from "../store/myStore";

const AnimalsPage = ({data}) => {

    const {addWrappingItem} = useStore(state => state)

    return (
        <div className="itemsGrid">
            {data.map((x, i) => <div onClick={() => addWrappingItem(x)} key={i}>{x}</div>)}
        </div>
    );
};

export default AnimalsPage;