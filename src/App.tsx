import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Manual} from "./layout/sections/manual/Manual";
import {Footer} from "./layout/footer/Footer";
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomeWork} from "./layout/sections/homework/HomeWork";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <HomeWork />
//     }
// ])

function App() {
    return (
        <div className="App">
           <Header/>
            <Main/>
            <HomeWork/>
            <Manual/>
            <Footer/>
            {/*<RouterProvider router={router}/>*/}
        </div>
    );
}

export default App;
