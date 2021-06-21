import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import ScrollContainer from 'react-indiana-drag-scroll'
import "./HC1.css";

export function HC1(){
    const dataHC1ScrollCardArr=[]
    const dataHC1NotScrollCardArr=[]
    const {state}=useContext(DataContext)
    const dataHC1=state.data.filter((items)=>items.design_type==="HC1")
    const dataHC1Scroll=dataHC1.filter((items)=>items.is_scrollable===true)
    dataHC1Scroll.map((items)=>items.cards.map((item)=>dataHC1ScrollCardArr.push(item)))

    const dataHC1NotScroll=dataHC1.filter((items)=>items.is_scrollable===false)
    dataHC1NotScroll.map((items)=>items.cards.map((item)=>dataHC1NotScrollCardArr.push(item)))

//    console.log(dataHC1NotScrollCardArr)
    return (
        <>
        <ScrollContainer className="normalImgList__imgWrapper" >
                    {dataHC1ScrollCardArr.map((card,i)=>( 
                        <div key={i} style={{backgroundColor:card.bgColor}} className="hc1_card_img">
                            <img src={card.icon.image_url} alt=""  className="hc1_Scroll_img" key={i+1}/>
                            <div className="hc1_img_text_container" key={i}>
                                <span className="hc1_img_text">{card.formatted_title.text.replace('{}'," ")}<span style={{color:card.formatted_title.entities.map((card)=>card.color)}}>{card.formatted_title.text.replace(card.formatted_title.text ,card.formatted_title.entities.map((items)=>items.text))}</span></span>
                             </div>
                        </div>
                    ))}
                    </ScrollContainer>
        <div className="hc1_notScroll_container">
            {dataHC1NotScrollCardArr.map((items,i)=>(
                <div key={i} style={{backgroundColor:items.bgColor}} className="hc1_card_img">
                   <img src= {items.icon.image_url} alt="" className="hc1_notScroll_img" style={{backgroundColor:items.bgColor}}/>
                   <div className="hc1_img_text_container" key={i+1}>
                        <span className="hc1_img_text">{items.formatted_title.text.replace('{}'," ")}<span style={{color:items.formatted_title.entities.map((items)=>items.color)}}>{items.formatted_title.text.replace(items.formatted_title.text ,items.formatted_title.entities.map((items)=>items.text))}</span></span>

                    </div>
                </div>
            ))}  
        </div>
        </>
    )
}