import React, { useEffect, useState, useContext } from 'react';
import { Card, Col, Row, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import { BASKET_ROUTE, } from "../utils/consts";
import { useHistory } from "react-router-dom"
import favorite from '../assets/favorite.png'
import favoriteOn from '../assets/favorite-on.png'
import { DEVICE_ROUTE } from "../utils/consts";
import { useCookies } from 'react-cookie';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import AddToCart from "../components/modals/AddToCart";

const DeviceItem = observer(({ devicee, materials, md }) => {
    const { device } = useContext(Context)
    const history = useHistory()
    const [cookies, setCookie] = useCookies();
    const [onFavorite, setOnFavorite] = useState(false)
    const [cartToVisible, setCartToVisible] = useState(false)
    const [incart, setIncart] = useState(false)

    const goToFavorite = (dev) => {
        let locStor = (JSON.parse(localStorage.getItem('favorite')));
        if (locStor === null) {
            locStor = []
        }
        let result = [];
        if (locStor.length !== 0) {
            if (locStor.includes(dev.id)) {
                const newArr = locStor.filter(item => item !== dev.id)
                result = newArr;
            } else {
                const newArr = locStor;
                newArr.push(dev.id)
                result = newArr;
            }
        } else {
            const newArr = locStor;
            newArr.push(dev.id)
            result = newArr;
        }
        localStorage.setItem('favorite', JSON.stringify(result))
        device.setFavorite(result)
    }
    useEffect(() => {
        let locStor = (JSON.parse(localStorage.getItem('cart')));
        if (locStor === null) {
            locStor = []
        }
        locStor.forEach(element => {
            if (element.id === devicee.id) {
                setIncart(true)
            }
        });
    }, [device.cart])

    useEffect(() => {
        let locStor = (JSON.parse(localStorage.getItem('favorite')));
        if (locStor === null) {
            locStor = []
        }
        if (locStor.length === 0) {
            setOnFavorite(false)
        }
        if (locStor.includes(devicee.id)) {
            setOnFavorite(true)
        } else {
            setOnFavorite(false)
        }
    }, [device.favorite])

    const korzina = (dev) => {
        if (cookies.id) {
            const fesf = dev.id
            const cookieNow = `${cookies.id}.${fesf}`
            setCookie('id', `${cookieNow}`)
        } else {
            setCookie('id', `${dev.id}`)
        }
    }
    const gserg = (mId) => {
        let result
        materials.forEach(element => {
            if (element.id === mId) {
                result = element.name
            }
        });
        return result
    }
    return (
        <Col sm={6} md={6} lg={6} xl={4} className={"mb-5"}>
            <Card style={{ cursor: 'pointer', border: 'none' }} border={"light"}>
                <Image onClick={() => goToFavorite(devicee)} className={'favorite-on-card'} src={onFavorite ? favoriteOn : favorite} />
                <div onClick={() => history.push(DEVICE_ROUTE + '/' + devicee.id)}>
                    <Image style={{ width: '100%' }} src={process.env.REACT_APP_API_URL + devicee.img} />
                    <p className='product-name mt-1'>{devicee.name}</p>
                    <span className="material-in-card">Материал:</span><span className="material-in-card-name">{gserg(devicee.materialId)}</span>
                    <div><span className="material-in-card">Цена:</span><span className="price">{devicee.price}</span><span className="price">руб.</span></div>
                </div>
                <Row className="card-btn-group">
                    <Col md={6}>
                        {incart ?
                            <NavLink to={BASKET_ROUTE}>
                                <button className="in-cart-btn">В корзине</button>
                            </NavLink>
                            :
                            <button className="main-btn" onClick={() => setCartToVisible(true)}>В корзину</button>
                        }
                    </Col>
                    <Col md={6}>
                        <button className="btn-buy-for-one-click">Купить в 1 клик</button>
                    </Col>
                </Row>
            </Card>
            <AddToCart devicee={devicee} show={cartToVisible} onHide={() => setCartToVisible(false)} />
        </Col>

    );
});

export default DeviceItem;
