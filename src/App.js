import './App.css';
import {Home} from "./pages/Home";
import { useEffect,useContext } from "react";
import { DataContext } from "./context/dataContext";
import axios from "axios";

function App() {
  const {dispatch}=useContext(DataContext);
    useEffect(()=>{
        (async function(){
            try{
                const response=await axios.get("https://run.mocky.io/v3/04a04703-5557-4c84-a127-8c55335bb3b4");
                dispatch({type:"SET_DATA",payload:response.data.card_groups})
            }
            catch(err){
                console.log(err)
            }
        })()
        // eslint-disable-next-line
    },[])
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
