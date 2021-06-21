import {useContext, useEffect, useState} from "react";
import { DataContext } from "../../context/dataContext";
import "./HC3.css";

export function HC3(){

    const [click,setClick]=useState('0px')
    const [visible,setVisible]=useState(1)
    const {state}=useContext(DataContext);
    const [permanent,setPermanent]=useState(false)
    const dataHC3CTA=[]
    const dataHC3=state.data.filter((items)=>items.design_type==="HC3")
    dataHC3.map((items)=>items.cards.map((item)=>item.cta.map((card)=>dataHC3CTA.push(card))))

    useEffect(()=>{
        (async function (){
            const response=await localStorage.getItem('property')
            if(response){
                setPermanent(true)
            }
        })()
    })
    useEffect(()=>{
        window.onscroll=()=>{
            setClick("0px")
            setVisible(1)
        }
    })
    function dismissHandler(){
        localStorage.setItem("property","Hi")
        setVisible(0)
    }
    function remindHandler(){
        setVisible(0)
    }
    
    return (
        <div className="hc3_container" onClick={()=>setClick('70px')} > 
        <div className="action_btn" >
                        <button onClick={remindHandler}>Remind Later</button>
                        <button onClick={dismissHandler}>Dismiss Now</button>
                   </div>
            {dataHC3.map((items)=>(
               <div key={items.id} className="hc3_card" style={{marginLeft:click,transitionProperty:'marginLeft',transitionDuration:'4s',opacity:permanent?0:visible}} >
                    {items.cards.map((card,i)=>(
                        <div key={items.id} className="hc3_img_container"  >  
                            <img src={card.bg_image.image_url} alt=""  className="hc3_img" />
                            <div className="hc3_text_container">
                            <span className="hc3_text_title">Your <span style={{color:"#FFFF00"}}>Account</span> looks <span style={{color:"#FF0000"}}>empty!</span></span>
                            
                                <span className="hc3_text_desc">{card.formatted_description.text.replace('{}'," ")}<span style={{color:card.formatted_description.entities.map((card)=>card.color)}}>{card.formatted_description.text.replace(card.formatted_description.text ,card.formatted_description.entities.map((items)=>items.text))}</span></span>
                            </div>
                            {dataHC3CTA.map((item,i)=>(
                                <button className="hc3_btn" style={{backgroundColor:item.bg_color,color:item.text_color}} key={i} onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href=item.url;
                                    }}>{item.text}</button>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}