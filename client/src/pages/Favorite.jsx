import React, { useState, useEffect, useContext } from 'react'
import { NavLink } from "react-router-dom";
import { SHOPE_ISKUS_YELKI_ROUTE, DEVICE_ROUTE } from "../utils/consts";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { fetchDevices } from "../http/deviceAPI";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import DeviceList from "../components/DeviceList";
import DeviceItem from "../components/DeviceItem";

const Favorit = observer(() => {
    const [noEmpty, setNoEmpty] = useState(false)
    const [favItemId, setFavItemId] = useState([])
    const [allDevices, setAllDevices] = useState([])
    const [favItem, setFavItem] = useState([])
    const { device } = useContext(Context)

    useEffect(() => {
        fetchDevices().then(data => {
            setAllDevices(data.rows)
        })
    }, [])
    useEffect(() => {
        let locStor = (JSON.parse(localStorage.getItem('favorite')));
        if (locStor === null || locStor.length === 0) {
            locStor = []
        }
        setFavItemId(locStor)
    }, [device.favorite])
    useEffect(() => {
        const gaerg = allDevices.filter(dev => favItemId.includes(dev.id))
        if (gaerg.length !== 0) {
            setNoEmpty(true)
        }
        if(gaerg.length == 0) {
            setNoEmpty(false)
        }
        setFavItem(gaerg)
    }, [favItemId, allDevices])
    return (
        <div className="myContainer">
            {noEmpty ?
                <div>
                    <h2 className="mt-4 mb-3">Избранные товары</h2>
                    <Row>
                        {favItem.map(item =>
                            <DeviceItem key={item.id} devicee={item} materials={device.materials} md={3} />
                        )
                        }
                    </Row>
                </div>
                :
                <div className="empty-favorite">
                    <div className="empty-favorite-content">
                        <h2>Нет товаров в избранном</h2>
                        <span>Нажмите сердечко возле товаров, чтобы добавить в избранное.</span>
                        <NavLink to={SHOPE_ISKUS_YELKI_ROUTE}>
                            <button className="main-btn">Начать покупки</button>
                        </NavLink>
                    </div>
                </div>
            }
        </div>
    )
})

export default Favorit;
