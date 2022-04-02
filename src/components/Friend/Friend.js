import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    console.log(props);
    const {name, username, id} = props.friend
    const navigate = useNavigate();
    const ShowFriendsDetails= () =>{
        const path =`/friend/${id}`;
        navigate(path)
    }
    return (
        <div>
            <h2>Name:{name}</h2>
            <Link to={'/friend/'+ id}> Show Details</Link>
            <button onClick={ShowFriendsDetails}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;