//  import React from "react";
 
 
 
//  function Card(props){

//     return(
//       <React.Fragment>
//       <div className="cards">
//         <div className="card">
//             <img src={props.img} alt="mypic" className='card_img'/>
//             <div className="card_info">
//               <span className='card_category'> {props.title}</span>
//               <h1 className="card_title">{props.sname} </h1>
//               <a href={props.link} target='_div'>
//                 <button>WATCH NOW</button>
//                 </a>
//               </div>
//         </div>
//       </div>
//   </React.Fragment>
  
//    );
//   }
//   export default Card;

//AMAZON prime series 
// import React from "react";

// function Card(props){
//   return(
//     <React.Fragment>
//       <div className="cards">
//         <div className="card">;
//         <img src={props.img}  alt='mypic' className="card_img" />
//           <div className="card_info">
//             <span className="card_category">{props.title}</span>
//             <h3 className="card_title"> {props.sname} </h3>
//               <a href={props.link} target='_div'>
//                 <button >WATCH NOW</button>
//               </a>

//           </div>
//         </div>
//       </div>
//       </React.Fragment>
//       );
// }
// export default Card;

import React from 'react';

function Card(props){
return(
  <>
    <div className="cards">
        <div className="card">
          <img src={props.img}  alt="mypic" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h1 className="card_title"> {props.sname} </h1>
             <a href={props.link} target="_div">
             <button >WATCH NOW</button>
             </a>
          </div>
        </div>
    </div>
  </>
);
}
export default Card;