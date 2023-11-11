import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Manual} from "./layout/sections/manual/Manual";
import {Footer} from "./layout/footer/Footer";
import {HomeWork} from "./layout/sections/homework/HomeWork";
import {Navigate, Route, Routes} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Main/>*/}
            <Routes>
                <Route path={'/'} element={<Navigate to={'/main'}/>}/>
                <Route path={'/main'} element={<Main/>}/>
                <Route path={'/homeWork'} element={<HomeWork/>}/>
                <Route path={'/manual'} element={<Manual/>}/>
            </Routes>

        </div>
    );
}

export default App;
