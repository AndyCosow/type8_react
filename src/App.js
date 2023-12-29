import './App.css';
import {useStore} from "./store/myStore";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import FoodPage from "./pages/FoodPage";
import AnimalsPage from "./pages/AnimalsPage";
import SportsPage from "./pages/SportsPage";
import Progressbar from "./components/Progressbar";
import PresentRecipe from "./components/PresentRecipe";
import WrapPresent from "./components/WrapPresent";

const animals = [
    "🐶", "🐭", "🐹", "🦊", "🐻", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵",
]
const food = [
    "🍎", "🍐", "🍌", "🍇", "🥥", "🍟", "🥨", "🍿", "🍫", "🎂", "🍰", "🧁",
]
const sports = [
    "⚽️", "🏀", "🏈", "⚾️", "🏓", "🪀", "🏸", "🏒", "🪃", "🏹", "🪁",
]

function App() {
    const {gameOver} = useStore(state => state)


    return (
        <div className="d-flex p-50">

            <div className="grow1">
                <BrowserRouter>
                    <div className="toolbar">
                        <Link to="/">Animals</Link>
                        <Link to="/food">Food</Link>
                        <Link to="/sports">Sports</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<AnimalsPage data={animals}/>}/>
                        <Route path="/food" element={<FoodPage data={food}/>}/>
                        <Route path="/sports" element={<SportsPage data={sports}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>

            {gameOver ?
                <div>GAME OVER</div> :
                <div className="grow1">
                    <Progressbar/>
                    <PresentRecipe data={[...animals, ...food, ...sports]}/>
                    <WrapPresent/>
                </div>
            }

        </div>
    );
}

export default App;
