import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendid} = useParams();
    const [friend, setFriend] =useState({});
    console.log(friend);

    useEffect(() =>{
       const url=`https://jsonplaceholder.typicode.com/users/${friendid}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h2>Friend Details off a boundhu: {friendid}</h2>
            <h2>name: {friend.name}</h2>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p><small>Address: {friend.address?.city}</small></p>
            <p><small>Geo: {friend.address?.geo.lng}</small></p>
            <p><small>Let: {friend.address?.geo.lat}</small></p>
            <p><small>website: {friend.website}</small></p>
        </div>
    );
};

export default FriendDetails;