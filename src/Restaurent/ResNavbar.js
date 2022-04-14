import react from "react";

const ResNavbar=()=>{


    return
    <>
     <nav className="navbar">
            <h1 class="display-1 bg-warning" style={mystyles}>Shree Shyam Sweets</h1>

                <div className="btn-group">
                <h1 class="display-5 mx-2 my-12" style={mystyles}>MENU</h1>

                    <button type="button" class="btn btn-outline-primary" onClick={() => filterItem("breakfast")}>Breakfast</button>
                    <button type="button" class="btn btn-outline-secondary" onMouseOver={() => filterItem("lunch")}>lunch</button>
                    <button type="button" class="btn btn-outline-success" onClick={() => filterItem("night")}>night</button>
                    <button type="button" class="btn btn-outline-danger" onClick={() => filterItem("evening")}>evening</button>
                    <button type="button" class="btn btn-outline-warning" onMouseOver={()=>setMenuData(Menu)}  >ALL</button>
                    <button type="button" class="btn btn-outline-info">Info</button>
                </div>
            </nav>


    
    </>
};
export default ResNavbar;