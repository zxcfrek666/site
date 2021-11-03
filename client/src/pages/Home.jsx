import React from 'react'
import { Carousel, Image, Row, Col } from "react-bootstrap";
import Slide1 from '../assets/1slide.jpg'
import Slide2 from '../assets/2slide.jpg'
import Slide3 from '../assets/3slide.jpg'
import Baner1 from '../assets/smallbanner-1.jpg'
import Baner2 from '../assets/smallbanner-2.jpg'
import BanerLink1 from '../assets/home_category_6.png'
import BanerLink2 from '../assets/iskust_elki.png'
import BanerLink3 from '../assets/visot_elki.png'
import BanerLink4 from '../assets/home_category_4.png'
import BanerLink5 from '../assets/home_category_5.png'
import { NavLink } from "react-router-dom";
import { FAVORITE_ROUTE, BASKET_ROUTE, SHOPE_CHRISTMAS_DECORATIONS_ROUTE, SHOPE_BALLS_ROUTE, SHOPE_ELECTRIC_GARLANDS_ROUTE, SHOPE_VIST_YELKI_ROUTE, LOGIN_ROUTE, SHOPE_ISKUS_YELKI_ROUTE, SHOP_ROUTE, SEARCH_ROUTE } from "../utils/consts";

export const Home = () => {
    return (
        <div className="home">
            <div className="myContainer">
                <Row>
                    <Col md={8}>
                        <div className="myCarousel">
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <Image className="slide-in-carusel d-block w-100" alt="First slide" src={Slide1} />
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <Image className="slide-in-carusel d-block w-100" alt="Second slide" src={Slide2} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="slide-in-carusel d-block w-100" alt="Third slide" src={Slide3} />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                    <Col md={4}>
                        <Image className="baner first-baner" src={Baner1} />
                        <Image className="baner" src={Baner2} />
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <NavLink className='name-product-in-basket' to={SHOPE_ISKUS_YELKI_ROUTE}>
                            <div className='link-banner'>
                                <p>Искусственные елки</p>
                                <Image className="img-in-banner" src={BanerLink2} />
                            </div>
                        </NavLink>
                    </Col>
                    <Col md={3}>
                        <NavLink className='name-product-in-basket' to={SHOPE_VIST_YELKI_ROUTE}>
                            <div className='link-banner'>
                                <p>Высотные елки</p>
                                <Image className="img-in-banner" src={BanerLink3} />
                            </div>
                        </NavLink>
                    </Col>
                    <Col md={3}>
                        <NavLink className='name-product-in-basket' to={SHOPE_BALLS_ROUTE}>
                            <div className='link-banner'>
                                <p>Шары</p>
                                <Image className="img-in-banner" src={BanerLink4} />
                            </div>
                        </NavLink>
                    </Col>
                    <Col md={3}>
                        <NavLink className='name-product-in-basket' to={SHOPE_CHRISTMAS_DECORATIONS_ROUTE}>
                            <div className='link-banner'>
                                <p>Елочные украшения</p>
                                <Image className="img-in-banner" src={BanerLink5} />
                            </div>
                        </NavLink>
                    </Col>
                    <Col md={3}>
                        <NavLink className='name-product-in-basket' to={SHOPE_ELECTRIC_GARLANDS_ROUTE}>
                            <div className='link-banner'>
                                <p>Электрогирлянды</p>
                                <Image className="img-in-banner" src={BanerLink1} />
                            </div>
                        </NavLink>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
