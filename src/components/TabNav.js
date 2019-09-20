import React, { useState } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {

    const [activeItem, setActive] = useState('home')

    const handleItemClick = (event, {name}) => {
        setActive(name);
    }

    return (
        <Menu tabular>
            <Menu.Item active={activeItem === 'home'} name="home" onClick={handleItemClick}/>
            <Menu.Item active={activeItem === 'locations'} name="locations" onClick={handleItemClick}/>
            <Menu.Item active={activeItem === 'characters'} name="characters" onClick={handleItemClick}/>
            <Menu.Item active={activeItem === 'episodes'} name="episodes" onClick={handleItemClick}/>
        </Menu>
    )
        
};
