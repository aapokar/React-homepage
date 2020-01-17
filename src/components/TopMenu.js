import React, {useState} from 'react'
import {Menu, Icon} from 'semantic-ui-react'
// eslint-disable-next-line
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const TopMenu = () => {
    const [activeItem, setActiveItem] = useState('')

    const handleItemClick = (e) => {
        setActiveItem(e)
    }

    return (
    <Menu stackable fluid widths={5}>
        <Menu.Item
            as={Link}
            to="/"
            active={activeItem === 'home'}
            onClick={() =>handleItemClick('home')}
        >
                <Icon name='home' />
        </Menu.Item>
        <Menu.Item 
            as={Link}
            to="/kuka"
            active={activeItem === 'kuka'}
            onClick={() =>handleItemClick('kuka')}
        >Kuka</Menu.Item>
        <Menu.Item 
            as={Link}
            to="/projektit"
            active={activeItem === 'projektit'}
            onClick={() =>handleItemClick('projektit')}
        >Projektit</Menu.Item>
        <Menu.Item 
            as={Link}
            to="/joke"
            active={activeItem === 'joke'}
            onClick={() =>handleItemClick('joke')}
        >Viihde</Menu.Item>
        <Menu.Item 
            as={Link}
            to="/about"
            active={activeItem === 'about'}
            onClick={() =>handleItemClick('about')}
        >About</Menu.Item>
</Menu>
    )
}

export default TopMenu