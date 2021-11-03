import React, { useEffect, useContext, useState } from 'react';
import { Context } from "../index";
import { fetchDevices } from "../http/deviceAPI";
import { useCookies } from 'react-cookie';
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SHOPE_ISKUS_YELKI_ROUTE, DEVICE_ROUTE, CHECKOUT_ROUTE } from "../utils/consts";
import Delete from '../assets/delete.png'
import BasketItem from '../components/BasketItem';

const Basket = () => {
    const [cookies, setCookie] = useCookies();
    const [devicee, setDevicee] = useState([])
    const [cartNoEmpty, setCartNoEmpty] = useState(false)
    const { device } = useContext(Context)

    const cookieId = cookies.id;

    const searchId = (devices, ids) => {
        let aarr = [];
        devices.forEach(element => {
            if (ids.includes(element.id)) {
                aarr.push(element)
            }
        });
        return aarr;
    }
    const removePost = (idd) => {
        let result = devicee.filter(item => item.id !== idd)
        localStorage.setItem('cart', JSON.stringify(result))
        setDevicee(result)
        device.setCart(result)
    }
    useEffect(() => {
        let locStor = (JSON.parse(localStorage.getItem('cart')));
        if (locStor === null) {
            locStor = []
        }
        setDevicee(locStor)
    }, [])

    useEffect(() => {
        if (devicee.length !== 0) {
            setCartNoEmpty(true)
        } else {
            setCartNoEmpty(false)
        }
    }, [devicee])

    useEffect(() => {
        if (cookieId) {
            fetchDevices().then(data => {
                const gserg = data.rows
                const arrCookieId = cookieId.split('.').map(Number);
                const res = searchId(gserg, arrCookieId)
            })
        }
    }, [cookieId])

    const orderPrice = () => {
        let result = 0;
        devicee.forEach(element => {
            result = element.price * element.count + result;
        });
        return result
    }
    return (
        <div className="myContainer">
            {cartNoEmpty ?
                <div>
                    <h2>Корзина покупок</h2>
                    <Row>
                        <Col md={8}>
                            {devicee.map(dev =>
                              <BasketItem devicee={dev} removePost={removePost} />  
                            )}
                        </Col>
                        <Col md={4}>
                            <div className='right-receipt'>
                                <div className='price-is'>
                                    <div className='price-is-item'>
                                        <span className='title-characteristic'>Доставка на сумму:</span><span className='description-characteristic'>800 руб.</span>
                                    </div>
                                    <div className='price-is-item'>
                                        <span className='title-characteristic'>Товаров на сумму:</span><span className='description-characteristic'>{orderPrice()} руб.</span>
                                    </div>
                                </div>
                                <span style={{ fontSize: 17 }}>Итоговая сумма:</span>
                                <span className="order-price">{orderPrice() + 800} руб.</span>
                                <NavLink className='go-to-checkout' to={CHECKOUT_ROUTE}>
                                    <button className="main-btn">Оформить заказ</button>
                                </NavLink>
                            </div>
                        </Col>
                    </Row>
                </div>
                :
                <div className="empty-cart">
                    <h2>В корзине пока ничего нет</h2>
                    <p className="description-basket">Вы можете начать свой выбор с главной страницы или воспользоваться поиском, если ищете что-то конкретное.</p>
                    <NavLink className="button-in-basket-page" to={SHOPE_ISKUS_YELKI_ROUTE}>
                        <button className="main-btn">Начать покупки</button>
                    </NavLink>
                </div>}
        </div>
    );
};

export default Basket;
