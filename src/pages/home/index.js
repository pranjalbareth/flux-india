import React, { useContext } from 'react';
import "./style.css";
import { CreatePost, Navbar } from '../../containers';
import Feed from '../../containers/feed';
import { UserContext } from '../../contexts/user';

export default function Home() {
    const [user, setUser] = useContext(UserContext).user;
    return (
        <div className="home">
            <Navbar />
            <CreatePost />
            {user ? <Feed /> : <></> }
        </div>
    )
}
