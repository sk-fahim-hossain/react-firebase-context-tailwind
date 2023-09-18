import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h3>this is home  {user && <span>{user.displayName}</span>}</h3>
        </div>
    );
};

export default Home;