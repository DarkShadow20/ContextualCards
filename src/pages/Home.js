import {HC3} from "../components/HC3/hc3";
import "./Home.css";
import {HC6} from "../components/HC6/hc6";
import {HC5} from "../components/HC5/hc5";
import {HC9} from "../components/HC9/hc9";
import {HC1} from "../components/HC1/hc1";
export function Home(){
    return(
        <div className="main-container">
            <div>
                <HC3/>
            </div>
            <div>
                <HC6/>
            </div>
            <div>
                <HC5/>
            </div>
            <div className="hc9">
                <HC9/>
            </div>
            <div>
                <HC1/>
            </div>
        </div>
    )
}
