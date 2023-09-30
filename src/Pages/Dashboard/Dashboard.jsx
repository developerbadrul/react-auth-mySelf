/* eslint-disable react/prop-types */

import { useState } from "react";

const Dashboard = ({user}) => {
    const [currentUser, setCurrentUser] = useState([])
    setCurrentUser(user)

    console.log(currentUser);
    return (
        <div>
            <h1>Login User{currentUser.displayName}</h1>
        </div>
    );
};

export default Dashboard;