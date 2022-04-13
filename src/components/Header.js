import React from 'react'
import "../style/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useStateValue } from '../stateProvider';



function Header() {
  const {user, image} = useStateValue()
  return (
    <div className='header'>
        <div className="header_left">
              <img src="/images/f_logo_RGB-Blue_58.png"alt="" />
              <div className='header__input'>
                  <SearchIcon/>
                  <input 
                  placeholder='Search Facebook'
                  type="text" />
              </div>
          
          
        </div>
        <div className="header_middle">
          <div className='header__option'>
              <HomeIcon fontSize='large'/>
          </div>
          <div className='header__option header__option--active'>
              <FlagIcon fontSize='large'/>
          </div>
          <div className='header__option'>
              <SubscriptionsIcon fontSize='large'/>
          </div>
          <div className='header__option'>
              <SupervisedUserCircleIcon fontSize='large'/>
          </div>
          <div className='header__option'>
              <StorefrontIcon fontSize='large'/>
          </div>
        </div>
        <div className="header_right">
          <div className="header__info">
            <Avatar src={image}/>
            <h4>{user}</h4>
          </div>
          <IconButton>
            <AddIcon/>
          </IconButton>
          <IconButton>
            <ForumIcon/>
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon/>
          </IconButton>
          <IconButton>
            <ExpandMoreIcon/>
          </IconButton>
        </div>
    </div>
  )
}

export default Header;