import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";

const MyComponent = () => {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/640px-YouTube_Logo.svg.png"
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="header__input">
                <input
                    type="text"
                    placeholder="Search"
                    value={inputSearch}
                    onChange={e => setInputSearch(e.target.value)}
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar
                    alt="Aregos"
                    src="https://avatars0.githubusercontent.com/u/11743372?s=400&u=76f11f1fc0ffffb1db69bffe28f3592a1e3b89bb&v=4"
                />
            </div>
        </div>
    );
};

export default MyComponent;
