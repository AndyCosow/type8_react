import React, {useEffect} from 'react';
import {useStore} from "../store/myStore";

const PresentRecipe = ({data}) => {

    const {recipe, addRecipe, counter} = useStore(state => state)

    // const recipe = [ "🍎","🍐","🍌"]

    useEffect(() => {
        const itemsAmount = Math.round(Math.random()*7)+1

        let result = []

        for (let i = 0; i < itemsAmount ; i++) {
            const rnd = Math.round(Math.random()*data.length-1)
            result.push(data[rnd])
        }

        addRecipe(result)

    }, [counter])

    return (
        <div>
            <h3>Recipe</h3>
            <div className="itemsGrid">
                {recipe.map((x, i) => <div key={i}>{x}</div>)}
            </div>
        </div>
    );
};

export default PresentRecipe;