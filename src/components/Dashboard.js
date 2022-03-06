import { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Profile from "./Profile";

const Dashboard = () => {
    const [profileData, setProfileData] = useState('')

    const handleProfile = data => {
        setProfileData(data);
    }

    return (
        <>
            <Navbar data={profileData} handleProfile={handleProfile} />
            {profileData === '' ? <Card handleProfile={handleProfile} /> :
                <Profile data={profileData} />}
        </>
    )
}
export default Dashboard;