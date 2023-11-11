import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Manual} from "./layout/sections/manual/Manual";
import {Footer} from "./layout/footer/Footer";
import {HomeWork} from "./layout/sections/homework/HomeWork";
import {Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "./components/Error";
import {ClassRoom} from "./layout/sections/classRoom/ClassRoom";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/main'}/>}/>
                <Route path={'/main'} element={<Main/>}/>
                <Route path={'/homeWork'} element={<HomeWork/>}/>
                <Route path={'/manual'} element={<Manual/>}/>
                <Route path={'/classroom'} element={<ClassRoom/>}/>
                <Route path={'/error'} element={<Error404/>}/>
                <Route path={'/*'} element={<Navigate to={'/error'}/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
