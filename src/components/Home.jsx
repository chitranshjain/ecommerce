import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import "../styles/Home.css";

function Home() {
    return <div className="wrapper">
        <Navbar />
        <Products />
    </div>
}

export default Home;