import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import "./HC5.css"
import ScrollContainer from 'react-indiana-drag-scroll'


export function HC5(){
    const {state}=useContext(DataContext)
    const dataHC5=state.data.filter((items)=>items.design_type==="HC5")
    const img=dataHC5.map((items)=>items.cards.map((card)=>card.bg_image.image_url))
    const imgArr=[]
    img.map((items)=>items.map((card)=>imgArr.push(card)))
    return (
        <>
                    <ScrollContainer className="normalImgList__imgWrapper" >
                    {imgArr.map((card,i)=>(  
                            <img src={card} alt=""  className="hc5_img" key={i}/>
                    ))}
                    </ScrollContainer>

        </>
    )
}