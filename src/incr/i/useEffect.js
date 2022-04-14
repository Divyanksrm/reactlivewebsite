import React, { useState, useEffect} from "react";
// import './style1.css';



// const UseEffect = () => {
//     const intial = 0;

//     const [myNum, setMyNum] = useState(intial);
//     useEffect(()=>{
//         console.log("hi")
//         document.title=`Chats(${myNum})`;


//     },);


    

//     return (
//   <>
//    <div className="center_div1">
//                 <p className="fw-bold">{myNum}</p>;
//          <div>
//                               <button type="button" id="Btn1 " className="btn btn-outline-success"
//                                onClick={() => setMyNum(myNum + 1)} >INCR</button>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>


//                 </div>
//                 </div>

//         </>
//     )


// };
// export default UseEffect;
// <button type="button" class="btn btn-primary">Primary</button>
// <button type="button" class="btn btn-secondary">Secondary</button>
// <button type="button" class="btn btn-success">Success</button>
// <button type="button" class="btn btn-danger">Danger</button>
// <button type="button" class="btn btn-warning">Warning</button>
// <button type="button" class="btn btn-info">Info</button>
// <button type="button" class="btn btn-light">Light</button>
// <button type="button" class="btn btn-dark">Dark</button>

// <button type="button" class="btn btn-link">Link</button>









const UseEffect=()=>{
    const intialData=0;
const [setNU,onSetNum]=useState(intialData);

useEffect(()=>{
    console.log("ji");
    document.title=`chats${setNU}`
});

    return(
        <>
        <h1 className="text-center bold  ">1</h1>
        <div className="widget">
            <h1 className="bold text-center extra-temp">{setNU} </h1>
            <div className="two-sided-section">
            <button className="btn btn-outline-warning" onClick={()=>onSetNum(setNU+1)}>INCR</button>
            <button className="btn btn-outline-primary" onMouseOver={()=>setNU>0&&onSetNum(setNU-1)}>DECR</button>   
            {/* ternary operator is used> */}

            <span></span>
                    <span></span>
                     <span></span>
                    <span></span>
            </div>



        </div>
      



        </>
    )

};
export default UseEffect;
