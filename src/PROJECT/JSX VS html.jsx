import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';

 const name="DIVYANK SHARMA";
 const  img1 = "https://picsum.photos/200/300";
 const  img2 = "https://picsum.photos/220/300";
 const  img3 = "https://picsum.photos/200/250";
 const links ='https://gaana.com/song/raataan-lambiyan-from-shershaah';
  

 

ReactDOM.render(
  <React.Fragment>
  <h1 className="heading">MY NAME IS {`${name}`}</h1>
  <div className="divyank">
  <img src={img1}  alt='random' />
  <img src={img2}  alt='random' />
  <a href="https://gaana.com/song/raataan-lambiyan-from-shershaah"  target="_DIVYANK">
  <img src={img3}  alt='random' />
  </a>
  </div>  

  </React.Fragment>,
  document.getElementById('root')
);