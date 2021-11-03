import React, { useEffect, useContext, useState } from 'react';
import { Context } from "../index";
import { fetchDevices } from "../http/deviceAPI";
import { useCookies } from 'react-cookie';
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SHOPE_ISKUS_YELKI_ROUTE, DEVICE_ROUTE } from "../utils/consts";

const Checkout = () => {
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
                    <h1 style={{ margin: "20px 0", fontSize: 48 }}>Оформление заказа</h1>
                    <Row>
                        <Col md={8}>
                            <div>
                                <h4>1. Контактная информация</h4>
                                <Row>
                                    <input className="input-check" type="text" placeholder="Фамилия" />
                                    <input className="input-check" type="text" placeholder="Имя" />
                                </Row>
                                <Row>
                                    <input className="input-check" type="text" placeholder="Отчество" />
                                    <input className="input-check" type="text" placeholder="Контактный телефон" />
                                </Row>
                                <Row>
                                    <input className="input-check" type="text" placeholder="Ваш Email" />
                                </Row>
                                <label className='check-block-checkout'>
                                    <input type="checkbox" />
                                    <span> Не перезванивать мне для подтверждения заказа, а сразу собирать и отправлять заказ.</span>
                                </label>
                            </div>
                            <div>
                                <h4>2. Адрес доставки</h4>
                                <Row>
                                    <input className="input-check" type="text" placeholder="Страна" />
                                    <input className="input-check" type="text" placeholder="Город" />
                                </Row>
                                <Row>
                                    <input className="input-check" type="text" placeholder="Улица, дом, квартира" />
                                </Row>
                            </div>
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
                                <a href={`https://sberbank.securpays.link/?pay=32663057&sum=${orderPrice() + 800}&ref=https://tvoysait.com/uspeh`}>
                                    <button className="main-btn btn-order">Оформить заказ</button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
                :
                <div className="empty-cart">
                    <h2>В корзине пока ничего нет</h2>
                    <p className="description-basket">Вы можете начать свой выбор с главной страницы или воспользоваться поиском, если ищете что-то конкретное.</p>
                    <Col md={2}>
                        <button type="submit" className="main-btn">Начать покупки</button>
                    </Col>
                </div>}
            <div>
            </div>
        </div>
    );
}

export default Checkout;
