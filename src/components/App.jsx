import React from "react";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddProducts from "./AddProducts";

function App() {
    return <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/addproduct" exact component={AddProducts} />
        </Switch>
    </Router>
}

export default App;