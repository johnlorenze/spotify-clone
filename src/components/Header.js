import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{ user }] = useDataLayerValue();
    const today = new Date();
    const currHour = today.getHours();

    const getGreeting = () => {
        let greeting;
        if (currHour < 12) {
            greeting = "Good morning";
        } else if (currHour < 18) {
            greeting = "Good afternoon";
        } else {
            greeting = "Good evening";
        }

        return greeting;
    }

    return (
        <div className="header">
            <div className="header__left">
                <h4>{getGreeting()}, {user?.display_name.slice(0, user?.display_name.indexOf(" "))}</h4>
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs or Podcasts"
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar
                    src={user?.images[0]?.url}
                    alt={user?.display_name}
                />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
