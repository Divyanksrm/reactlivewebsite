import React, {  useReducer } from "react";
// import './style1.css';

const reducer = (state, action) => {
    if(action.type==="INCR"){
        state=state+1
    }
    if(state>0 && action.type==="DICR"){
        state=state-1

    }
    return state;
 };


const UseReducer = () => {
    const intialData = 10;


    // const [myNum, setMyNum] = useState(intialData);

    const [state, dispatch] = useReducer(reducer, intialData);

    return (
        <>
            <div className="center_div1">

                <p class="h1 text-center fw-bold bg-danger">{state}</p>
                <div>
                    <button type="button" id="Btn1 " className="btn btn-outline-light text-center"
                        onClick={()=>{dispatch({type:"INCR"})}}>INCR</button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>


                </div>

                <button type="button" className="btn btn-outline-warning "
                    onClick={()=>{dispatch({type:"DICR"})}}>DICR </button>



            </div>

        </>
    )


};
export default UseReducer;
// <button type="button" class="btn btn-primary">Primary</button>
// <button type="button" class="btn btn-secondary">Secondary</button>
// <button type="button" class="btn btn-success">Success</button>
// <button type="button" class="btn btn-danger">Danger</button>
// <button type="button" class="btn btn-warning">Warning</button>
// <button type="button" class="btn btn-info">Info</button>
// <button type="button" class="btn btn-light">Light</button>
// <button type="button" class="btn btn-dark">Dark</button>

// <button type="button" class="btn btn-link">Link</button>