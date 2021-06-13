import React from 'react'
import { useSelector } from 'react-redux';
import Nav from '../components/Nav'
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import PlansScreen from './PlansScreen';
import "./ProfileScreen.css"
import avatar from '../assets/images/generic-avatar.png';

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                 <h1>Edit Profile</h1>
                 <div className="profileScreen__info">
                    <img src={avatar} alt="Profile Avatar" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>

                            <PlansScreen />
                            <button 
                                onClick={() => auth.signOut()} 
                                className="profileScreen__signout">
                                Sign Out
                            </button>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default ProfileScreen
