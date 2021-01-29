import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'

function Header() {
    const [inputSearch,setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/640px-YouTube_Logo_2017.svg.png?1611852803622" alt=""></img>
                </Link>
            </div>
            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} value={ inputSearch } type="text" placeholder="Search" className="header__inputDesign"/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
                {/* <Route path='/privacy-policy' component={() => { 
                    window.location.href = 'https://example.com/1234'; 
                    return null;
                }}/> */}
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar alt="profile_pic" src="https://avatars.githubusercontent.com/u/49131888?s=400&u=5429817bb4b8ddc5a4a9797ec6424bf18e048676&v=4" />
            </div>
        </div>
    )
}

export default Header
