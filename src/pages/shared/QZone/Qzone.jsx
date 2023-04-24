import React from 'react';
import qzone1 from '../../../assets/qZone1.png'


const Qzone = () => {
    return (
        <div className='bg-secondary text-center my-2 py-4'>
            <h4>Q-Zone</h4>
            <img src={qzone1} alt="" />
            <img src={qzone1} alt="" />
            <img src={qzone1} alt="" />
        </div>
    );
};

export default Qzone;