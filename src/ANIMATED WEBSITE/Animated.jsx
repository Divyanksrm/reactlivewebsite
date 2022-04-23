import React,{ useState } from "react";

const Animated =()=>{
    const [data,setData]=useState({
        fullName:"",
        phone:"",
        email:"",
        message:"",

    }
   

    );
    const inputEv=(event)=>{
        const {name,value}=event.target;
      setData((preV)=>{
          return{
                        ...preV,[name]:value,
          };
      }

      )  
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`${data.fullName}`)

    };


    return(
        <>
       <div className="my-5">
           <h1 className="text-center">Contact Us</h1>
       </div>
       <div className="container contact_div">
           <div className="row">
               <div className="col-md-6 col-10 mx-auto">
                   <form  onSubmit={formSubmit}>
               <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full name</label>
  <input type="name" className="form-control" 
  id="exampleFormControlInput1"
 name="fullName" 
 value={data.fullName}
 onChange={inputEv}
   placeholder="Enter Your Name" 
  />
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" 
  name="phone" 
  value={data.phone}
  onChange={inputEv}
  placeholder="Enter Mobile No..." />
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" 
  name="email" 
  value={data.email}
  onChange={inputEv}
  placeholder="Enter Your Email " />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
   name="message" 
   value={data.message}
   onChange={inputEv}
  
  ></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit</button>
  </div>
  </form>
               </div>
           </div>
       </div>
       
        </>
    );
};

export default Animated