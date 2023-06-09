import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {

    return (
        <Container>
            <div className='text-center my-5'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY, h:mm a")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-center text-danger' speed={70} pauseOnHover={true}>
                    I can be a React component, multiple React components, or just some text...........  kalke thik moto kaj krte hbe.............
                </Marquee>
            </div>
           
        </Container>
    );
};

export default Header;