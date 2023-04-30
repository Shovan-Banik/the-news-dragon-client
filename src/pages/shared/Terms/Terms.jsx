import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quis accusamus ipsam ipsum sed harum atque ducimus consequuntur, velit minima, assumenda facere voluptatum. Blanditiis deserunt ducimus obcaecati earum, enim ipsam dolor commodi excepturi, incidunt fugiat, quidem repudiandae itaque minus quam possimus. Dolor maxime ipsam qui laborum pariatur inventore esse soluta?</p>
            <p>Go back to <Link to="/register">Register</Link></p>

        </div>
    );
};

export default Terms;