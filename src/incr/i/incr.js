import React, { useState } from "react";
 import './style1.css';



const UseState = () => {
    const intial = 0;

    const [myNum, setMyNum] = useState(intial);

    return (
  <>
            <div className="center_div1">
                <p className="fw-bold">{myNum}</p>;
      <div>
                              <button type="button" id="Btn1 " className="btn btn-outline-success"
                               onClick={() => setMyNum(myNum + 1)} >INCR</button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>


                </div>

                <button type="button" className="btn btn-outline-warning " 
                onClick={() =>(myNum>0 ? setMyNum(myNum - 1) :setMyNum(0))}>DICR </button>



            </div>

        </>
    )


};
export default UseState;
// <button type="button" class="btn btn-primary">Primary</button>
// <button type="button" class="btn btn-secondary">Secondary</button>
// <button type="button" class="btn btn-success">Success</button>
// <button type="button" class="btn btn-danger">Danger</button>
// <button type="button" class="btn btn-warning">Warning</button>
// <button type="button" class="btn btn-info">Info</button>
// <button type="button" class="btn btn-light">Light</button>
// <button type="button" class="btn btn-dark">Dark</button>

// <button type="button" class="btn btn-link">Link</button>