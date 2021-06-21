import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import "./HC6.css"
export function HC6(){
    const {state}=useContext(DataContext)
    const dataHC6=state.data.filter((items)=>items.design_type==="HC6")
    return (
        <>
        <div className="hc6_container"> 
            {dataHC6.map((items,i)=>(
               <div key={i} className="hc6_card" >
                    {items.cards.map((card,j)=>(
                        <div key={j+1} className="hc6_card_img" onClick={(e) => {
                            e.preventDefault();
                            window.location.href=card.url;
                            }}>  
                            <img src={card.icon.image_url} alt=""  className="hc6_img"/>
                            <div className="hc6_img_text_container" key={j+2}>
                                <span className="hc6_img_text">{card.formatted_title.text.replace('{}'," ")}<span style={{color:card.formatted_title.entities.map((items)=>items.color)}}>{card.formatted_title.text.replace(card.formatted_title.text ,card.formatted_title.entities.map((items)=>items.text))}</span></span>

                                <span className="hc6_img_desc">{card.formatted_description.text.replace('{}'," ")}<span style={{color:card.formatted_title.entities.map((items)=>items.color)}}>{card.formatted_description.text.replace(card.formatted_description.text,card.formatted_description.entities.map((items)=>items.text))}</span></span>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        </>
    )
}