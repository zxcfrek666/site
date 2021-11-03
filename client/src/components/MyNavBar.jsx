import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { FAVORITE_ROUTE, DOSTAVKA_ROUTE, BASKET_ROUTE, SHOPE_BALLS_ROUTE, SHOPE_CHRISTMAS_DECORATIONS_ROUTE, SHOPE_ELECTRIC_GARLANDS_ROUTE, LOGIN_ROUTE, SHOPE_VIST_YELKI_ROUTE, SHOPE_ISKUS_YELKI_ROUTE, SHOP_ROUTE, SEARCH_ROUTE, HOME_ROUTE} from "../utils/consts";
import logo from '../assets/logo-elkitorg.png'
import favorite from '../assets/favorite.png'
import search from '../assets/search.png'
import shopping from '../assets/shopping-cart.png'
import Image from "react-bootstrap/Image";
import { useCookies } from 'react-cookie';
import { color } from '@mui/system';
import { observer } from "mobx-react-lite";
import { Context } from "../index";


export const MyNavBar = observer(() => {
    const { device } = useContext(Context)
    const [cookies, setCookie] = useCookies();
    const [searchValue, setSearchValue] = useState('')
    const [cartPrice, setCartPrice] = useState('')
    const [producrCartCount, setProducrCartCount] = useState(0)
    useEffect(() => {
        device.setSearch(searchValue)
    }, [searchValue])

    useEffect(() => {
        let locStor = (JSON.parse(localStorage.getItem('cart')));
        if (locStor === null || locStor.length === 0) {
            setProducrCartCount(0)
        } else {
            setProducrCartCount(locStor.length)
        }
    }, [device.cart])

    useEffect(() => {
        let locStor = (JSON.parse(localStorage.getItem('cart')));
        if (locStor === null) {
            locStor = []
        }
        if(locStor.length !== 0) {
            let result = 0
            locStor.forEach(element => {
                result += element.price
            });
            setCartPrice(`Ваша корзина на ${result}руб.`)
        } 
        else {
            setCartPrice('Ваша корзина пуста')
        }
    }, [device.cart])

    return (
        <div className="MyNavBar">
            <div className="up-navbar">
                <div className="myContainer">
                    <nav className="up-navbar-content">
                        <ul>
                            <li><NavLink to={HOME_ROUTE}>О компании</NavLink></li>
                            <li><NavLink to={DOSTAVKA_ROUTE}>Доставка и оплата</NavLink></li>
                            <li><NavLink to={HOME_ROUTE}>Контакты</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="center-navbar">
                <div className="myContainer">
                    <div className="center-navbar-content">
                        <NavLink to={HOME_ROUTE}>
                            <Image width={100} height={100} src={logo} />
                        </NavLink>
                        <div className="search">
                            <input
                                className='seach'
                                placeholder="Поиск по товарам"
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                            />
                            <NavLink style={{ padding: "0 10px" }} to={SEARCH_ROUTE}>
                                <Image width="20" src={search}></Image>
                            </NavLink>
                        </div>
                        <div style={{ borderRight: "1px solid #e5e5e5" }}>
                            <NavLink style={{ padding: "0 30px" }} to={FAVORITE_ROUTE}>
                                <Image width={30} src={favorite} />
                            </NavLink>
                        </div>
                        <NavLink style={{ color: '#4d4d4d' }} to={BASKET_ROUTE}>
                            <div className="d-flex">
                                <Image width="40" height="40" style={{marginRight: 20}} src={shopping}></Image>
                                <div>
                                    <div style={{ display: 'flex' }}>
                                        <div>
                                            Корзина
                                        </div>
                                        <div>
                                            ({producrCartCount})
                                        </div>
                                    </div>
                                    <div>
                                        {cartPrice}
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="down-navbar">
                <div className="myContainer">
                    <div className="down-navbar-content">
                        <ul>
                            <li><NavLink className="down-navbar-content-navlink" to={SHOPE_ISKUS_YELKI_ROUTE}><p>Искусственные елки</p></NavLink></li>
                            <li><NavLink className="down-navbar-content-navlink" to={SHOPE_VIST_YELKI_ROUTE}><p>Высотные елки</p></NavLink></li>
                            <li><NavLink className="down-navbar-content-navlink" to={SHOPE_ELECTRIC_GARLANDS_ROUTE}><p>Электрогирлянды</p></NavLink></li>
                            <li><NavLink className="down-navbar-content-navlink" to={SHOPE_BALLS_ROUTE}><p>Шары</p></NavLink></li>
                            <li><NavLink className="down-navbar-content-navlink" to={SHOPE_CHRISTMAS_DECORATIONS_ROUTE}><p>Елочные украшения</p></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
});

// export default MyNavBar;