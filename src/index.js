
// import React from 'react';

// import ReactDOM from 'react-dom';
 // multiple elements iniside the render

// ReactDOM.render(
// <div>
//   <h1>hello world</h1>
//   <p>like and subscribe</p>
//   <h2>dIvyank sharma</h2>
// </div>,
// document.getElementById("root")
// );


// 09 //react fragment
// ReactDOM.render(
//   <React.Fragment>
//     <h1>netflix  pick </h1>
//     <p>here the lsit of 5 netflix clips</p>
//     <ol>
//         <li>DARK</li>
//         <li> LUCIFER</li>
//         <li>MONEY HEIST</li>
//         <li>SECREAT GAME</li>
//         <li>SEX EDUCATION</li>
//    </ol>
//   </React.Fragment>, 
//   document.getElementById("root")
//   );

// //10 js expression in jsx
// const f1name = "Divyank";

// ReactDOM.render(
//   <React.Fragment>
//   <h1> its {f1name} sharma here  </h1>
//   <p>My luckey numebr is {Math.random()}}</p>
//   </React.Fragment>,
//   document.getElementById('root')
// ); 


  //11 templete literals
  
  // const fname="divyank";
  // const lname="sharma";


  // ReactDOM.render(
  //   <React.Fragment>
  //     <h1>my name is {`${fname} ${lname}`}</h1>
  //     <p>my luckey no is {5*5} </p>
  //   </React.Fragment>,
  
  // document.getElementById("root")
  // );

  //ADDED DATE; 
//  const name ="Divyank sharma"
//   const currDate= new Date().toLocaleDateString()
//   const currTime = new Date().toLocaleTimeString()

//   ReactDOM.render(
//     <React.Fragment>
//     <h1> My name is {'name'}</h1>
//     <p> new current date is {`${currDate}`}</p>
//     <p> current time is {`${currTime}`}</p>
//     </React.Fragment>,
//   //  document.getElementById('root')
//   );

  // 13 jsx vs html attribute
//   import React from 'react';
//   import ReactDOM from 'react-dom';
//   import './index.css';

//  const name="DIVYANK SHARMA";
//  const  img1 = "https://picsum.photos/200/300";
//  const  img2 = "https://picsum.photos/220/300";
//  const  img3 = "https://picsum.photos/200/250";
//  const links ='https://gaana.com/song/raataan-lambiyan-from-shershaah';
  

 

// ReactDOM.render(
//   <React.Fragment>
//   <h1 className="heading">MY NAME IS {`${name}`}</h1>
//   <div className="divyank">
//   <img src={img1}  alt='random' />
//   <img src={img2}  alt='random' />
//   <a href="https://gaana.com/song/raataan-lambiyan-from-shershaah"  target="_DIVYANK">
//   <img src={img3}  alt='random' />
//   </a>
//   </div>  

//   </React.Fragment>,
//   document.getElementById('root')
// );

// //16 INLINE CSS/GREETING  PROJECT MADE

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';



// let greeting="";

// let currDate= new Date(2021,8,4,);
// currDate=currDate.getHours()
// const cssStyle={};
  
// if(currDate>=1&& currDate<12){
//  greeting='Good Morning';
//  cssStyle.color='green';
// }else if(currDate>=12 && currDate <19){
//   greeting='Good Afternoon';
//   cssStyle.color='orange';
// }else{
//   greeting='Good Night';
//   cssStyle.color='blue';
// }

//   ReactDOM.render(
//     <React.Fragment>
//       <div>
//       <h1> Hello Divyank,<span style={cssStyle}>{greeting}</span></h1>
//       </div>
//     </React.Fragment>,
//    document.getElementById("root") 
//   );



//ate<12){
//   greeting="good morning";
//   cssStyle.color='green';
// }else if (curDate>=12 && curDate<19){
//   greeting="good afternoon";
//   cssStyle.color='yellow'; import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// let greeting="";

// let curDate = new Date(2021,4,9,);
// curDate=curDate.getHours()

// const cssStyle={};

// if(curDate>=1 && curD
// }else  {
//   greeting="good night";
//   cssStyle.color='black';

// }




// ReactDOM.render(
//   <React.Fragment>
//     <div>
//       <h1>Hey,divyank <span style={cssStyle}>{greeting}</span></h1>
//     </div>

//   </React.Fragment>,
//   document.getElementById("root")
//);

///// Component uses  in APP .js ,file.js,para.js,;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';  
// import './index.css';


// ReactDOM.render(
  
//     <App />,
//   document.getElementById("root")
// );

/// IMPORT AND EXPORT

// import React from 'react';
// import ReactDOM from 'react-dom';
// import youtuber, { prog,myDIV,Myname } from './App';
 
// ReactDOM.render(
//  <React.Fragment>
//    <ol>
//      <li>THAPA </li>
//      <li>{youtuber} </li>

//      <li>{prog}</li>
//      <li>{myDIV()}</li>
//      <li>{Myname()}</li>
//    </ol>

//  </React.Fragment>,
//  document.getElementById("root")
// );
//  calculator
// import React from 'react';
// import  ReactDOM  from 'react-dom';
// import App from './App';

// ReactDOM.render(
//     <React.Fragment>
      
//       <App />


//     </React.Fragment>,
//     document.getElementById('root')


// );

//////PROPS

// import React  from 'react';
// import ReactDOM from 'react-dom';

// function Card(){
//   return(
//   <React.Fragment>
// <div className="cards">
//   <div className="card">
//     <img src="http://wallpapercave.com/wp/wp4056410.jpg" alt="mypic" className="card_img" />
//       <div className="card_info">
//         <span className="card_title"> A Netflix orignal Series </span>
//         <h3 className="card_title"> DARK </h3>
//       <a href="https://www.netflix.com/in/title/80100172 " target="_div">
//         <button>WATCH NOW</button>
//       </a>
//     </div>    
//   </div>
// </div>
// </React.Fragment>

// );
// }


// ReactDOM.render(
// <React.Fragment>

// <Card />
// <Card />

// <Card />


// </React.Fragment>,
// document.getElementById('root')
// );

///NETFLIX TOP 5


// import  React from 'react';
// import ReactDOM from 'react-dom';
// import  Card from './Card';
// import './index.css';
// import Sdata from './Sdata'; 

// function ncard(cvalue){
//     console.log(cvalue);
//   return(
//     <Card
       
//          img ={cvalue.img}
//         title={cvalue.title}
//         sname={cvalue.sname}
//         link={cvalue.link}
//         />
//   );
// }




// ReactDOM.render(
//     <React.Fragment>
//       <h1 className='heading'>List of Top 5 netflix series in 2020 </h1>
//       {Sdata.map(ncard)}
//           {/*
//         <Card img ={Sdata[1].img}
//         title={Sdata[1].title}
//         sname={Sdata[1].sname}
//         link={Sdata[1].link}
//       />

        
//         <Card img ={Sdata[2].img}
//         title={Sdata[2].title}
//         sname={Sdata[2].sname}
//         link={Sdata[2].link}
//         />

//     <Card img ={Sdata[3].img}
//         title={Sdata[3].title}
//         sname={Sdata[3].sname}
//         link={Sdata[3].link}
//       />
//         <Card img ={Sdata[4].img}
//         title={Sdata[4].title}
//         sname={Sdata[4].sname}
//         link={Sdata[4].link}
//       /> */}
     
//     </React.Fragment>,
//     document.getElementById('root')
// ); 




//AMAZON PRIME 

// import React from "react";
// import ReactDOM from 'react-dom';
// import Card from './Card';
// import './index.css';







  
// ReactDOM.render(
// <React.Fragment>
//   <h1 className="heading"> THE TOP 5 SERIES ON AMAZON PRIME </h1>
// <Card img="https://wallpapercave.com/w/wp7285321.jpg"
//         title="A Prime Orignal Series"
//         sname="Mirzapur"
//        href="https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_b_brand66_mkw_8jmsP9ph-dc&mrntrk=pcrid_75591546818214_slid__pgrid_1209463172295506_pgeo_156461_x__ptid_kwd-75591717297265:loc-90"
//     />
//         <Card img="https://wallpapercave.com/w/wp6075938.jpg"
//         title="A Prime Orignal Series"
//         sname="FAMILY MAN2"
//         link='https://www.primevideo.com/detail/0H3DDB4KBJFNDCKKLHNRLRLVKQ/?ref_=dvm_pds_gen_in_as_s_gt_tfm2site_mkw_s-dc&mrntrk=pcrid_452516200052_slid_FHnYuajW_pgrid_105713381899_pgeo_9302239_x_180955810720_ptid_dsa-932982753595'/>
       
//         <Card img="https://wallpapercave.com/w/wp1886398.jpg"
//         title="A Prime Orignal Series"
//         sname="hostal dayz2"
//         link='https://www.primevideo.com/detail/Hostel-Daze/0RMNVF1U4KJSQJQGZ029FUN1FN'/>

// <Card img="https://wallpapercave.com/w/wp7032655.jpg"
//         title="A Prime Orignal Series"
//         sname="Four more shots"
//         link='https://www.primevideo.com/detail/Four-More-Shots-Please/0HBU0DV03Q2R9RLV7NJP5H6CXK'/>
       
//         <Card img="https://wallpapercave.com/w/wp7003406.jpg"
//         title="A Prime Orignal Series"
//         sname="THE boys"
//         link='https://www.primevideo.com/detail/The-Boys/0KRGHGZCHKS920ZQGY5LBRF7MA'/>
// </React.Fragment>,
// document.getElementById('root')


// );

///////AMAZON PRIME 
////map and fat arrow methoddddddddddddddddddddddddddddd

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from './Card'; 
// import Sdata from './Sdata';
// import './index.css';


// ReactDOM.render(
//     <React.Fragment>
//         <h1 className='heading'> TOP SERIES OF PRIME VIDEO </h1>
//        {Sdata.map((val,index) =>{
//          console.log(index)
//          return(
//           <Card 
         
//            img ={val.img}
//           title={val.title}
//           sname={val.sname}
//           link={val.link}
//       />
//          );   
//          })}
      
 //// map and FAT Arrow methodoooooooooooooooooooooooooooooooooooooooooooooooool      
//         </React.Fragment>,
       
//         <Card img ={Sdata[0].img}
//          title={Sdata[0].title}
//          sname={Sdata[0].sname}
//          link={Sdata[0].link}
//     />
//  <Card img ={Sdata[1].img}
//          title={Sdata[1].title}
//          sname={Sdata[1].sname}
//          link={Sdata[1].link}
//     />

//      <Card img ={Sdata[2].img}
//          title={Sdata[2].title}
//          sname={Sdata[2].sname}
//          link={Sdata[2].link} 
//     />

// <Card img ={Sdata[3].img}
//          title={Sdata[3].title}
//          sname={Sdata[3].sname}
//          link={Sdata[3].link}
//     />
//  <Card img ={Sdata[4] .img}
//          title={Sdata[4].title}
//          sname={Sdata[4].sname}
//          link={Sdata[4].link}
//     />
    // </React.Fragment>,

     


  // 

    

// document.getElementById('root')

// );


//////if else in REactttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt

// import React from 'react';
//  import ReactDOM from 'react-dom';
// import Card from './Card'; 
// import Sdata from './Sdata';
// import './index.css';
// // import Netflix from './Netflix';


// const FavSeries='Amazon ';

// const FavS=() =>{
//   if(FavSeries==='Netflix'){
//     return(
//       <Card
//         img =   {Sdata[4] .img}
//               title={Sdata[4].title}
//               sname={Sdata[4].sname}
//               link={Sdata[4].link}
//          />
//     );
//   }else{

//     return(
//       <Card img ={Sdata[2].img}
//                 title={Sdata[2].title}
//                 sname={Sdata[2].sname}
//                 link={Sdata[2].link}
//            />
//     );
//   }
// }

// ReactDOM.render(
//   <>
//   <h1 className="heading"> top series </h1>
//       <FavS />
//   </>,
//   document.getElementById('root')
// );

/////////////////Slot machine game


// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <App />,


//   document.getElementById('root')
//   );


  ////////////HOOKS METHPOD

  import React from "react";
import ReactDOM from "react-dom";
import './index.css';
 import App from './App';
import {BrowserRouter} from "react-router-dom";


// import App from  './App';
//  import ToDO from './ToDO';
// var shooterGames=["call of duty","far cry","resident evil"];
// var [first,...remaining]=shooterGames;
//   le.log(remaining); 
 
ReactDOM.render(
  <>
    <BrowserRouter>
       <App />
    </BrowserRouter>,
   
    </>,
 document.getElementById("root")
);
  
