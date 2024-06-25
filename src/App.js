import './App.css';
import Trello from "./Components/Trello";
import {useState} from "react";
import {useDispatch} from "react-redux";
import Input from "./common/input/Input";
import NewTrello from "./Components/NewTrello";


function App() {

  return (
      <div className="flex m-4">
          <Trello />
         <NewTrello />
      </div>
  );
}

export default App;
