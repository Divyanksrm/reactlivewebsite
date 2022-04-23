// import React from 'react';
// import reactDom from 'react-dom';
// import Heading   from './Heading';
// import Para from './Para';
// import File from './File';


// import { useState } from "react/cjs/react.development";

// function App(){
//     return(
//     <>
//     <Heading />
//     <Para />
//     <File />
//     </>
//     );
// }
// export default App;

// const youtuber ="thapa technicl";
// const prog='React js';


// function myDIV(){
//     let name ='DIVYANK';
//     return  name;
// }
// function Myname(){
//     let names='DIVYANK SHARMA';
//     return  names; 

// }

//  export default youtuber;
//  export {prog, myDIV,Myname}; 

// calculatorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// import React from "react";
// import {add,sub,mult,div} from './Calc';

// function App(){
//     return(
//    <React.Fragment>
//       <ul>
//         <li>{add(24,24)}</li>
//         <li>{sub(30,15)}</li>
//         <li>{mult(5,5)}</li>
//         <li>{div(10,2)}</li>
//        </ul>
//       </React.Fragment>
//     );

// }
// export default App;

// import React from "react";
// import SlotM from "./Slot machine";






// const App =() => {
// return(
//   <>
//   <h1 className='heading'> 🎰Welcome to <span style={{fontWeight:'bold'}}>Slot machine game</span> 🎰 </h1>
//   <div className='slotmachine'>
//   <SlotM  x='😄' y='😄' z='😄' />
//   <hr />
//   <SlotM  x='👱‍♂️' y='🍌' z= '🍌'/>
//   <hr />
//   <SlotM    x='👱‍♂️' y='🍊' z= '🍌'/>
//   <hr />
//   <SlotM    x='🍊' y='🍊' z= '🍊'/>
//   </div>
//   </>

// )
// };

// export default App;
///////////////////////////HOOKS METHOD

// import React, { useState } from "react";



// const App = () =>{

// const State= useState(); 
// console.log('State');


// const [count,setCount]= useState(0);

// const IncNum=() =>{
//   setCount(count+1);

// };




//   return(
//   <>
//   <h1>{count}</h1>
//   <button onClick={IncNum}>Click me</button>
//   </>
//   );
// };
// export default App;

////////////////////////////////Get digital and time with hooks
// import React, { useState } from "react";

// const App=()=>{
//   let NewTime = new Date().toLocaleTimeString();

// const state= useState();

// const [ctime,setCtime] =useState(NewTime);

// const UpDateTime=()=>{
//   NewTime = new Date().toLocaleTimeString();
//   setCtime(NewTime);

// };
// setInterval(UpDateTime,1000);


// return(
//   <>
//       <h1>{ctime}</h1>
//       <button onClick={UpDateTime}>get Time</button>
//       </>
// );

// };
// export default App;

//////////////////handling Events in Reactjs

// import React, { useState } from "react"; 

// const App=()=>{
//   const purple='purple';
//   const state=useState();
//   const [bgcol,setbg]=useState(purple);
//   const [name,setnamne]=useState('click me')



//   const bg=()=>{
//     // console.log('click');

//       let newbg='#34495e';
//       setbg(newbg);
//       setnamne('!ooochhh😏')
//   };  


// return(
//   <>
//     <div style={{backgroundColor:bgcol}} >
//       <button onClick={bg}>{name}</button>
//     </div>
//   </>
// );

// };
// export default App;

/////React form //////////////////////////
// import React, { useState } from "react";

// const App=()=>{

//   const [name,cName]=useState(''); 
//   const [Dname,setFullName]=useState();

//   const inpute=(event)=>{
//     cName(event.target.value);

//   };

//   const Divyank=()=>{
//     setFullName(name)
//   }

// return(
// <>

//   <div>
//     <h1> Hello {Dname}</h1>
//     <input type="text" placeholder='Enter Your Name' onChange={inpute} />
//     <button onClick={Divyank}>CLICK ME🛩️</button>

//   </div>
//   </>
// );
// };
// export default App;
/////Login form submited in Reactjs


//  import React ,{ useState } from 'react';


//  const App=()=>{

//    const[name,setName]=useState("");
//    const [lastName,setLastName]=useState("");
//    const [fullName,setFullName]=useState("");

//    const [lastNamenew,setLastNameNew]=useState("");

//    const Submit=(event)=>{
//      event.preventDefault();
//      setFullName(name);
//      setLastName(lastName);
//    };



//    const input1=(event)=>{
//   setName(event.target.value);
//    };

//    const input2 =(event)=>{
//      setLastNameNew(event.target.value);
//    };




//   return(
//       <>
//       <div className="rohit">
//         <form onSubmit={Submit}>
//              <div>
//                <h1>HELLO,{fullName}{lastNamenew}</h1>

//                <input type="text"  placeholder='Enter User name' onChange={input1} value={name} />  

//                  <input type="text"  placeholder='Enter User password' onChange={input2} value={lastName} />      


//                <button type="submit" >Login🔒</button>     


//              </div>




//         </form>
//         </div>
//       </>
//   );
//  };

// export default App;

//////   reacttttt formmmmmmmmmmmmmmmmmm





// import React ,  { useState } from 'react';


// const App=()=>{
//     const [fullName,setfullname] = useState({
//         fname:"",
//         lname:"",
//     });
//     const inputEvent = (event)=>{
//       console.log(event.target.value);
//       console.log(event.target.name);





//         const value = event.target.value;
//         const name = event.target.name;

//         setfullname((preValue) =>{
//             if(name === "fname"){
//         return{
//                 fname:value,
//                 lname:preValue.lname,
//             };
//         }else  if(name === "lname"){
//             return{
//                     fname:preValue.fname,  
//                     lname:value,
//                 };
//     };
//  } );
//     };


//     const Submit=(event)=>{
//         event.preventDefault();
//         alert("form submitted")

//     };

//     return (
//         <>
//           <div className="std">
//             <form onSubmit={Submit}>
//                 <div>
//                 <h1>hello {fullName.fname}{fullName.lname}</h1> 
//                 <input type="text" placeholder="enter  name"  name="fname"  onChange={inputEvent} value={fullName.fname}/>   

//                 <input type="text" placeholder="enter ur  last name"     name="lname"   onChange={inputEvent} value={fullName.lname}/>    

//                 <button type="submit">Submit me</button>

//                 </div>



//             </form>


//           </div>

//         </>  


//     );
// };

//     export default App;
/////////to Do list  IMPORT VERY IMPORTANT 
/*

import React from "react";
import { useState } from "react/cjs/react.development";
import TodoLists from "./Todolist";

const App =()=>{
    const [inputlist,setinput]=useState('');
    const [items,setitems] = useState([]);



    const itemsEvent=(event)=>{
        setinput(event.target.value)
    };
    const listof=()=>{
           setitems((old)=>{
            return[...old ,inputlist]
           });
           setinput("");
    };
    const deleted=(id)=>{
      console.log("deleted")

  
  setitems((old)=>{
    return old.filter((arrElem,index)=>{

      return index !==id;
    });

  });
  

  
};
return(
<>
    <div className="MAIN_DIV">
        <div className="center_div">
            <br />

            <h1>ToDo list</h1>                                                                                       
            <br />
            <input type="text" placeholder="Add a item" onChange={itemsEvent}
            value={inputlist} />
            <button  onClick={listof}>+</button>
            <ol>
                {items.map((itemval,index )=>{
                  return(
                   <TodoLists 
                   text={itemval}
                   key={index}
                   id={index}
                      onS={deleted}
                    />
                  )
                })}
            </ol>
        </div>

    </div>

</>

);

};
export default App;
*/

/////icreament and decrement  the state variable 

// import React, { useState } from "react";


// const App = ()=>{
//     let newTime = new Date().toLocaleTimeString();
//         const [ctime,setCtime]=useState(newTime);
//         let newTime = new Date().toLocaleTimeString();

//     return(
//         <>
//         <h1>{ctime}</h1>
//         <button onClick={UpdateTime}>Get Time </button>
//         </>
//     )

// }
// export default App;


// const App =()=>{
//     let newTime=new Date().toLocaleTimeString();
//     const [cTime,SetTime]=useState(newTime);
//     const dj=()=>{
//          newTime=new Date().toLocaleTimeString();
//          SetTime(newTime);
//     };
//     setInterval(dj,1000);


//    return(v  
//        <>
//        <h1>{cTime}</h1>
//        </>
//    );
// };
// export default App;
// import React from "react";
// import { useState } from "react/cjs/react.development";

// const App=()=>{
//     //  const [name,setname]=useState("");
//     const[name,setname]=useState();
//     const[Fullname,setFullname]=useState();

//     const Inputevent=(event)=>{
//         console.log(event.target.value);
//         setname(event.target.value);
//     };
//     const onSubmit=(event)=>{
//         event.prefa
//       setFullname(name); 

//     };
//     const Inputevent2=()=>{event}
//             return(
//             <>
//             <div className="main_div">
//                 <form onSubmit={onSubmit}>
//                 <h1>HELLO,{Fullname}</h1>
//                 <input type="text" placeholder="enter your name" 
//                 value={name}
//                 onChange={Inputevent} />
//               <button onClick={onSubmit}>click me</button>
//               <input type="text" placeholder="enter your lAST name" 
//                 value={lastname}
//                 onChange={Inputevent2} />

//             </form>

//             </div>




//             </>
//      )
// };



// export default App;







// const App=()=>{
//   const [input1,setinput]=useState();
//   const [rohit,divyank]=useState([]);

// const stylish=(event)=>{
//   setinput(event.target.value)
// };
// const listoF=()=>{
//   divyank((olditem)=>{
//     return[...olditem,input1];
//   });
//   setinput(""); 

// };

//   return(
//       <>
//       <div className="main_div">
//           <div className="center_div">
//               <br />
//               <h1>Todolist</h1>
//               <br />
//               <input type="text" placeholder="Add a items" onChange={stylish}
//               value={input1}

//               />

//               <button onClick={listoF}>+</button>
//                <ol className="li">
//                  <li>{input1}</li>
//                </ol>

//              {  rohit.map((itemVal)=>{
//                  return(
//                    <li>{itemVal}</li>
//                  )
//                })}
//           </div>
//       </div>

//       </>
//   )
// };
// export default App;



// import Restaurent from './Restaurent';

// import UseState from  './incr/i/incr.js';
// import UseEffect from './incr/i/useEffect.js';
// import UseEffect1 from './incr/i/useEffect.js';
// import UseReducer from './incr/useReducer';
// import Todo1 from './ToReact.js/todo1';
// import Temp from "./wheather/wheather";   wheather application

// const App = () => {

//   return (


//     <>
//       {/* <Restaurent /> */}




//       <Temp />




//     </>
//   )
// };

// export default App;
import React from "react";
import Home from './ANIMATED WEBSITE/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import {Switch, Route,Redirect} from "react-router-dom";
import Animated from './ANIMATED WEBSITE/Animated';
import Service from './ANIMATED WEBSITE/Service';
import About from './ANIMATED WEBSITE/About';
import Navbar from './ANIMATED WEBSITE/Navbar';
import Footer from "./ANIMATED WEBSITE/Footer";


const App = () => {

  return (


    <>
    <Navbar /> 


      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/About" component={About}/>
        <Route  exact path="/Service" component={Service}/>
        <Route  exact path="/Animated" component={Animated}/>
        <Redirect to="/" />

      </Switch>
      <Footer />
  



    </>
  )
};

export default App;