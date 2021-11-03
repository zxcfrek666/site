import React from 'react';
import {Col, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { DEVICE_ROUTE} from "../utils/consts";
import Delete from '../assets/delete.png'

const BasketItem = ({devicee, removePost}) => {
    return (
        <div>
            <Row className="item-basket" key={devicee.id}>
                <Col md={2}>
                    <Image style={{ width: '100%' }} src={process.env.REACT_APP_API_URL + devicee.img} />
                </Col>
                <Col md={5}>
                    <NavLink className='name-product-in-basket' to={DEVICE_ROUTE + '/' + devicee.id}>{devicee.name}</NavLink>
                </Col>
                <Col md={2}>
                    <NavLink className='name-product-in-basket' to={DEVICE_ROUTE + '/' + devicee.id}>{devicee.count}</NavLink>
                </Col>
                <Col md={2}>
                    <p className="price-item-basket">{devicee.price} руб.</p>
                </Col>
                <Col md={1}>
                    <Image className='delete-btn' onClick={() => removePost(devicee.id)} width={25} src={Delete} />
                </Col>
            </Row>
        </div>
    )
}

export default BasketItem;
