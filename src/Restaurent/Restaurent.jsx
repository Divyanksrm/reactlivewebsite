import React, { useState } from "react";
// import  from "react/cjs/react.production.min";
import Menu from "./restaurentApi.js";
import ResMenucard from "./resMenucard.js";
import ResNavbar from "./ResNavbar.js";

const unique=[
    ...new Set(
    Menu.map((currElem)=>{
    return currElem.category;

}

))];
console.log(unique);

const Restaurent = () => {

    const mystyles = { color: 'red' ,fontStyle:"italic"};

    const [menuData, setMenuData] = useState(Menu);
    console.log(menuData);
    const filterItem = (category) => {
        const updatedList = Menu.filter((currElem) => {
            return currElem.category === category;


        });
        setMenuData(updatedList)



    }

    return (

        <>
        <ResNavbar />
                       <ResMenucard menuData={menuData} />
        </>
    )

};
export default Restaurent;
