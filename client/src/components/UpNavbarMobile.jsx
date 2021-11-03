import React, { useState, useEffect, useContext} from 'react'
import { Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FAVORITE_ROUTE, DOSTAVKA_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOPE_ISKUS_YELKI_ROUTE, SHOP_ROUTE, SEARCH_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import favorite from '../assets/favorite.png'
import logo from '../assets/logo-elkitorg.png'
import { Context } from "../index";

export const UpNavbarMobile = observer(() => {
    const [openBurger, setOpenBurger] = useState(false)
    const [favoriteCount, setFavoriteCount] = useState(1)
    const { device } = useContext(Context)
    

    
    useEffect(() => {
        let locStor = (JSON.parse(localStorage.getItem('favorite')));
        if (locStor === null || locStor.length === 0) {
            setFavoriteCount(0)
        } else {
            setFavoriteCount(locStor.length)
        }
    }, [device.favorite])

    const burger = () => {
        if (openBurger === true) {
            setOpenBurger(false)
        } else {
            setOpenBurger(true)
        }
    }
    return (
        <div className="up-nav-m">
            <div className="up-nav-m-content">
                <div className='up-nav-m-content-left'>
                    <div onClick={() => burger()} className={openBurger ? "burger active" : 'burger'}>
                        <span className={openBurger ? 'span-bureg activ' : 'span-bureg'}></span>
                    </div>
                    <div className='logo-m'>
                        <Image src={logo} />
                    </div>
                </div>
                <div className='up-nav-m-content-left'>
                    <NavLink to={FAVORITE_ROUTE}>
                        <Image className="icon-nav-m" src={favorite}></Image>
                        <div className={favoriteCount !== 0 ? "count-favorite-m active" : "count-basket-m"}>
                                <span>{favoriteCount}</span>
                            </div>
                    </NavLink>
                </div>
            </div>
            <div className={openBurger ? 'links-block-burer active' : 'links-block-burer'}>
                <ul>
                    <li><NavLink onClick={() => burger()} to={LOGIN_ROUTE}><p>О компании</p></NavLink></li>
                    <li><NavLink onClick={() => burger()} to={DOSTAVKA_ROUTE}><p>Доставка и оплата</p></NavLink></li>
                    <li><NavLink onClick={() => burger()} to={SHOP_ROUTE}><p>Контакты</p></NavLink></li>
                </ul>
            </div>
        </div>
    )
});
