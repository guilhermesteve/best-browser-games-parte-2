import React from 'react';
import './home.css'

function Home() {
    return (
        <div className="home-page">
            <h2>Jogos Recentes</h2>
            <div className="game-container">

                <div className="game">
                    <img src="https://i0.wp.com/geekpopnews.com.br/wp-content/uploads/2022/04/Fortnite.jpg?resize=954%2C537&ssl=1" alt="Game 1" />
                    <p>FORTNITE</p>
                </div>
                <div className="game">
                    <img src="https://unidadedoscomercios.com.br/uploads/images/7-jogos-online-mais-jogados-no-mundo-10006.jpg" alt="Game 2" />
                    <p>LOL</p>
                </div>
                <div className="game">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXHMJh-1UoyY1n08VCRqSWQV69qxVKkA8aQ&usqp=CAU" alt="Game 3" />
                    <p>ROBLOX</p>
                </div>
            </div>
        </div>
    )
}

export default Home;