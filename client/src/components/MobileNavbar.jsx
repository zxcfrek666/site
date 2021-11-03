import React, { useState, useEffect, useContext } from 'react'
import { Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FAVORITE_ROUTE, BASKET_ROUTE, SHOPE_ELECTRIC_GARLANDS_ROUTE, SHOPE_CHRISTMAS_DECORATIONS_ROUTE, SHOPE_BALLS_ROUTE, LOGIN_ROUTE, SHOPE_VIST_YELKI_ROUTE, SHOPE_ISKUS_YELKI_ROUTE, SHOP_ROUTE, SEARCH_ROUTE, HOME_ROUTE } from "../utils/consts";
import home from '../assets/home.png'
import search from '../assets/search.png'
import shopping from '../assets/shopping-cart.png'
import categories from '../assets/categories.png'
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const MobileNavbar = observer(() => {
    const [catalogOpen, setCatalogOpen] = useState(false)
    const [blackBg, setBlackBg] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const [producrCartCount, setProducrCartCount] = useState(0)
    const { device } = useContext(Context)
    const [searchValue, setSearchValue] = useState('')

    const catalog = () => {
        if (catalogOpen === true) {
            const body = document.querySelector('body');
            body.classList.remove('no-scroll')
            setCatalogOpen(false)
            setBlackBg(false)
        } else {
            const body = document.querySelector('body');
            body.classList.add('no-scroll')
            setCatalogOpen(true)
            setBlackBg(true)
        }
    }
    const allClose = () => {
        const body = document.querySelector('body');
        body.classList.remove('no-scroll')
        setCatalogOpen(false)
        setBlackBg(false)
    }
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
    const clickSearch = () => {
        setOpenSearch(true)
    }
    const closeSearch = () => {
        setOpenSearch(false)
    }
    return (
        <div className={catalogOpen ? 'm-navbar m-navbar-active' : 'm-navbar'}>
            <div className="m-navbar-menu">
                <ul>
                    <li>
                        <NavLink className="nav-link-m" to={HOME_ROUTE}>
                            <Image className="icon-nav-m" src={home}></Image>
                            <span className='menu-name'>Главная</span>
                        </NavLink>
                    </li>
                    <li className='serch1-m nav-link-m' onClick={() => catalog()}>
                        <Image className="icon-nav-serch1-m" src={categories}></Image>
                        <span className='menu-name pad'>Категории</span>
                    </li>
                    <li>
                        <NavLink className="nav-link-m" to={BASKET_ROUTE}>
                            <Image className="icon-nav-m" src={shopping}></Image>
                            <div className={producrCartCount !== 0 ? "count-basket-m active" : "count-basket-m"}>
                                <span>{producrCartCount}</span>
                            </div>
                            <span className='menu-name'>Корзина</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => clickSearch()} className="nav-link-m" to={SEARCH_ROUTE}>
                            <Image className="icon-nav-serch-m" src={search}></Image>
                            <span className='menu-name pad'>Поиск</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={catalogOpen ? 'catalog-nav-m-active ' : 'catalog-nav-m'}>
                <ul>
                    <li><NavLink onClick={() => allClose()} className="down-navbar-content-navlink" to={SHOPE_ISKUS_YELKI_ROUTE}><p>Искусственные елки</p></NavLink></li>
                    <li><NavLink onClick={() => allClose()} className="down-navbar-content-navlink" to={SHOPE_VIST_YELKI_ROUTE}><p>Высотные елки</p></NavLink></li>
                    <li><NavLink onClick={() => allClose()} className="down-navbar-content-navlink" to={SHOPE_ELECTRIC_GARLANDS_ROUTE}><p>Электрогирлянды</p></NavLink></li>
                    <li><NavLink onClick={() => allClose()} className="down-navbar-content-navlink" to={SHOPE_BALLS_ROUTE}><p>Шары</p></NavLink></li>
                    <li><NavLink onClick={() => allClose()} className="down-navbar-content-navlink" to={SHOPE_CHRISTMAS_DECORATIONS_ROUTE}><p>Елочные украшения</p></NavLink></li>
                </ul>
            </div>
            <div onClick={() => allClose()} className={blackBg ? 'black-back-active' : 'black-back'}></div>
            <div className={openSearch ? 'search-m active' : 'search-m'}>
                <input
                    placeholder="Поиск по товарам"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                />
                <span onClick={() => closeSearch()}>x</span>
            </div>
        </div>
    )
});

export default MobileNavbar;
