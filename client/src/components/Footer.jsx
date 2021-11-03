import React from 'react'
import { NavLink } from "react-router-dom";
import { HOME_ROUTE, SHOPE_ISKUS_YELKI_ROUTE, SHOPE_VIST_YELKI_ROUTE, SHOPE_ELECTRIC_GARLANDS_ROUTE, SHOPE_BALLS_ROUTE, SHOPE_CHRISTMAS_DECORATIONS_ROUTE, DOSTAVKA_ROUTE} from "../utils/consts";
import { Image } from "react-bootstrap";
import yRayting from '../assets/rating5.png'
import instagram from '../assets/instagram.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="myContainer">
                <div className='footer-content'>
                    <div className='foter-item'>
                        <p>КАТАЛОГ</p>
                        <ul className="footer-list">
                            <li><NavLink className="down-navbar-content-navlink" to={SHOPE_ISKUS_YELKI_ROUTE}><p>Искусственные елки</p></NavLink></li>
                            <li><NavLink className="down-navbar-content-navlink" to={SHOPE_VIST_YELKI_ROUTE}><p>Высотные елки</p></NavLink></li>
                            <li><NavLink className="down-navbar-content-navlink" to={SHOPE_ELECTRIC_GARLANDS_ROUTE}><p>Электрогирлянды</p></NavLink></li>
                            <li><NavLink className="down-navbar-content-navlink" to={SHOPE_BALLS_ROUTE}><p>Шары</p></NavLink></li>
                            <li><NavLink className="down-navbar-content-navlink" to={SHOPE_CHRISTMAS_DECORATIONS_ROUTE}><p>Елочные украшения</p></NavLink></li>
                        </ul>
                    </div>
                    <div className='foter-item'>
                        <p>О КОМПАНИИ</p>
                        <ul className="footer-list">
                            <li><NavLink className="down-navbar-content-navlink" to={HOME_ROUTE}><p>О магазине</p></NavLink></li>
                            <li><NavLink className="down-navbar-content-navlink" to={HOME_ROUTE}><p>Отзывы покупателей</p></NavLink></li>
                            <li><NavLink className="down-navbar-content-navlink" to={HOME_ROUTE}><p>Контакты</p></NavLink></li>
                        </ul>
                    </div>
                    <div className='foter-item'>
                        <p>ДЛЯ ПОКУПАТЕЛЕЙ</p>
                        <ul className="footer-list">
                            <li><NavLink className="down-navbar-content-navlink" to={ DOSTAVKA_ROUTE}><p>Доставка и оплата</p></NavLink></li>
                            <li><NavLink className="down-navbar-content-navlink" to={HOME_ROUTE}><p>Как сделать заказ?</p></NavLink></li>
                            <li><NavLink className="down-navbar-content-navlink" to={HOME_ROUTE}><p>Вопрос-ответ</p></NavLink></li>
                            <li><NavLink className="down-navbar-content-navlink" to={HOME_ROUTE}><p>Гарантии</p></NavLink></li>
                            <li><NavLink className="down-navbar-content-navlink" to={HOME_ROUTE}><p>Обмен и возврат</p></NavLink></li>
                        </ul>
                    </div>
                    <div className='foter-item'>
                        <p>КОНТАКТНАЯ ИНФОРМАЦИЯ</p>
                        <p className="discription-foter">Перьмь, улица 1950 года 35к1<br />пн-пт 9-20, сб вс 10-19</p>
                        <div className="contact-info-img-block">
                            <div>
                                <p>МЫ В СОЦСЕТЯХ</p>
                                    <Image width={30} src={instagram} />
                            </div>
                            <div>
                                <Image src={yRayting} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
