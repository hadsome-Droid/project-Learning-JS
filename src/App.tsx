import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Manual} from "./layout/sections/manual/Manual";
import {Footer} from "./layout/footer/Footer";



function App() {
    return (
        <div className="App">
           <Header/>
            <Main/>
            <Manual/>
            <Footer/>
        </div>
    );
}

export default App;
