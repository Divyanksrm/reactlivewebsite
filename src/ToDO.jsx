// // import React from "react";
// // import { useState } from "react/cjs/react.development";

// // const ToDo = () =>{

// //     const [ince,useinc] = useState(1);
// //      const incNUM = ()=>{
// //          useinc(ince+1)
// //      }
// // const decNUM= ()=>{
// //     if(ince>0){
// //       useinc(ince-1)
// //     }else{
// //         useinc(0);
// //     };
    
   
// // };



// //     return(
// //          <>
// //             <div className="MAIN_DIV">
// //                 <div className="center_div">
// //                     <h1>{ince}</h1>
// //                     <div className="btn_div">
// //                         <button onClick={incNUM}>INCREAM</button>
// //                         <button onClick={decNUM}>DECREMEN</button>
// //                     </div>

// //                 </div>
// //             </div>
// //          </>
// //     );
// // };
// // export default ToDo ;


// import React from "react";
// import { useState } from "react/cjs/react.development";
// import Todolist from "./Todolist";

// const ToDo =()=>{

//      const [item,selectitem]=useState("");
//      const[divyank,rohit]=useState([]);

//      const ADD=(event)=>{
//          selectitem(event.target.value)
//      };
//         const S=()=>{
//             rohit((old)=>{
//                 return[...old,item]
//                     selectitem("");
//             })  
            

            
            

//         };


//     return(
//         <>
//         <div className="main_div">
//             <div className="center_div">

//                 <h1>ToDo list</h1>

//                 <input type="text" 
//                 placeholder="add item"
//                 onChange={ADD}
//                  />
//                  <button onClick={S}>+</button>
//             <ol>
//                { divyank.map(itemval
//                 )}
//                 {/* <Todolist /> */}
//             </ol>

//             </div>



//         </div>



//         </>


//     )
// };
// export default ToDo;