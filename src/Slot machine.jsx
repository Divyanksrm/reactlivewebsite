import React from "react";


const SlotM= (props)=>{
  
   
    let {x,y,z}=props;
  
    if(x===y&&y===z){
      return(
        <>
        <div className="slot_inner">
          <h1>{x}{y}{z}</h1>
          <h1>THIS IS MATCHING </h1>
  
          <hr></hr>
          
  
        </div>
  
  
        </>
      );
    }else{
      return(
        <>
        <div className="slot_inner">
          <h1>{x}{y}{z}</h1>
          <h1>THIS IS NOT  MATCHING </h1>
  
          <hr></hr>
          
  
        </div>
  
  
        </>
      );
    }
}
    export default SlotM;