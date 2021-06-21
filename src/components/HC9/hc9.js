import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import "./HC9.css";

export function HC9(){
    const {state}=useContext(DataContext)
    const dataHC9=state.data.filter((items)=>items.design_type==="HC9")
    const cards=dataHC9.map((items)=>items.cards)
    const card_info=cards.map((items)=>items.map((item)=>item.bg_image))
    const imgArr=[]
   card_info.map((items)=>items.map((item)=>imgArr.push(item.image_url)))
    return (
            <div className="hc9_container">
                    {imgArr.map((card,i)=>(  
                            <img src={card} alt=""  className="hc9_img" key={i}/>
                    ))}
            </div>
    )
}