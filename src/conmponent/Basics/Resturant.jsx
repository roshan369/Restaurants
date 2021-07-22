import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar"

const uniqueList = [
    ...new Set(Menu.map((curElem) => {
        return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
    const [menuData, setmenuData] = useState(Menu);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setmenuData(updatedList);
    }

    return(
        <>
        <Navbar filterItem={filterItem} />
        <MenuCard menuData={menuData} />
        </>
    );
}

export default Resturant;