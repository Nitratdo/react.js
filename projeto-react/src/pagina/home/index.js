import React from "react";
import './style.css';
import './top.css';
import './left.css';
import './page-1.js';
import First_Page from "./page-1.js";
import './page_1.css';


function Home() {
    return (<div>
        <div>
            <div>
                <header>
                    <div className="top-search">
                        <input type="search" id="search" name="search" className="input-search-bar" placeholder="Barra de pesquisa"></input>
                    </div>
                    <h1 className="text">teste</h1>
                    <div className="top-border">
                        <div className="button_border">
                            <button className="test">
                                <img src="https://img.icons8.com/ios/50/000000/facebook-new.png" alt="facebook" />
                            </button>
                        </div>


                    </div>
                </header>
            </div>
        </div>
        <main>
            <div className="input-box-border"> 
                <input type="text" id="fname" name="fname" className="input" placeholder="Escreva no chat!!!"></input>
            </div>
            <div className="container-box-left">
                <div className="container-bar-left">
                <button onClick={First_Page}>
                    <a href="./pagina/home/page-1'.js">Teste</a>
                </button>
                </div>
            </div>
        </main>
    </div>
    );
        
        
}

console.log(<Home/>);

export default Home;