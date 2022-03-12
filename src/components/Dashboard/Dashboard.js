import { useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";

const Dashboard = () => {
    const [profileData, setProfileData] = useState('');

    const [filterText, setFilterText] = useState('');
    const handleProfile = data => {
        setProfileData(data);
    }

    const handleFilterText = (data) => {
        setFilterText(data)
    }

    return (
        <>
            <Navbar data={profileData} handleProfile={handleProfile} handleFilterText={handleFilterText} />
            {profileData === '' ? <Card handleProfile={handleProfile} filterText={filterText} /> :
                <Profile data={profileData} />}
        </>
    )
}
export default Dashboard;