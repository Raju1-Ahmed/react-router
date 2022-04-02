import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Frinds = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div>
            <h2>Hello Friends: How Are You</h2>
            <p>Parle kisu tk dardish..{friends.length}</p>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Frinds;