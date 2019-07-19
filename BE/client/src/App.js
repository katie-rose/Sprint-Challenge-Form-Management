import React from "react";
import RegForm from "./components/RegForm";
import NavBar from "./components/NavBar";
import DataList from "./components/DataList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  const [token, setToken] = useLocalStorage('token');
  return (
    <div className="App">
      <NavBar />
             <Route exact path="/" render={(props) => <RegForm setToken={setToken}/>} />
                   <Route exact path="/data" component={DataList} />
    </div>
  );
}

export default App;
