import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <>
            <Header />
            <Menu />
            <Footer />
        </>
    );
}

function Header() {
    // const style = { color: "red", fontSize: "32px", textTransform: "uppercase" }
    const style = {};

    return (
        <header className="header">
            <h1 style={style}> Beachside Pizzaria </h1>
            <h1 style={style}> 🏖️🏖️🏖️  </h1>

        </header>
    );
}

function Menu() {

    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>


            {numPizzas > 0 ? (

                < >
                    <p>Authentic Italian cuisines ,,, 6 creative dishes to choose from. all from our store oven, all organic and delicious</p>



                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>


                </>
            )
                : <p>We are still wroking on our Menu .. please come back later :) </p>
            }




        </main>
    );
}

function Pizza({ pizzaObj }) {


    // if (pizzaObj.soldOut) return null;


    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>

                {/* {pizzaObj.soldOut ? <span> Sold Out</span> : <span>Price: ${pizzaObj.price}</span>} */}

                <span>{pizzaObj.soldOut ? "Sold Out" : "$" + pizzaObj.price} </span>
            </div>
        </li>
    );
}

function Footer(props) {
    console.log(props)
    const hour = new Date().getHours();
    const openHour = 7;
    const closeHour = 23;

    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (hour >= openHour && hour <= closeHour)
    // alert("We are currently open");else alert("We are currently closed");
    // if (!isOpen) return (
    //     <p>closed now ..come between {openHour}:00 and {closeHour}:00. </p>
    // ;
    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} />
            ) : (
                <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00. </p>
            )}
        </footer>
    );
}


function Order({ closeHour }) {
    return (<div className="order">
        <p>we are open until {closeHour}:00, Come visit us or order Online...</p>
        <button className="btn">Order</button>
    </div>)
}





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
