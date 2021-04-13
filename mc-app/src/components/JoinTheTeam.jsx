import React, { } from 'react';
import '../styles/JoinTheTeam.css';
import CustomNavbar from './CustomNavbar.jsx';

const JoinTheTeam = () => {
    return (<>
        <CustomNavbar title={"JOIN THE TEAM"} />

        <div className="team-content">
            <p>The Meantime Coffee Co. is a non-profit, student-run coffee shop located in lobby of the Campus Y, UNC's Center for Social Justice and Social Innovation. To learn more about the organization, please explore our website or find us on Facebook, Twitter or Instagram.</p>
            <br></br>
            <p className="thick">Feel free to reach out with questions: marketing@meantimecoffee.com</p>
        </div>
    </>)
}

export default JoinTheTeam;