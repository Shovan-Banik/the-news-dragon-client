import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/shared/RightNav/RightNav';
import Footer from '../pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9} className='my-4'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;