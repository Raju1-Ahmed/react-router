import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
      <h2>Welcome To my fancy Routing Website</h2>
        
      <Link to={"/"}>Home</Link>
      <Link to={"friends"}>Friend</Link>
      <Link to={"/post"}>Post</Link>
      <Link to={"/about"}>About</Link>
      

     
      {/* <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/frinds'>Friend</CustomLink>
            <CustomLink to='/about'>About</CustomLink> */}

        </div>
    );
};

export default Header;