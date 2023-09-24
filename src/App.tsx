import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Manual} from "./layout/sections/manual/Manual";



function App() {
    return (
        <div className="App">
           <Header/>
            <Main/>
            <Manual/>
        </div>
    );
}

export default App;
