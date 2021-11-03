import React, { useEffect, useState, useContext } from 'react';
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Context } from "../index";
import { useParams } from 'react-router-dom'
import { fetchOneDevice, fetchTypes, fetchMaterials, fetchMadeCountries, fetchColor, fetchProductClass } from "../http/deviceAPI";
import { useCookies } from 'react-cookie';
import { observer } from "mobx-react-lite";
import AddToCart from "../components/modals/AddToCart";

const DevicePage = observer(() => {
    const { device } = useContext(Context)
    const [devicee, setDevicee] = useState({ info: [] })
    const [cookies, setCookie] = useCookies();
    const { id } = useParams()
    const [materialName, setMaterialName] = useState('')
    const [madeCountryName, setMadeCountryName] = useState('')
    const [typeName, setTypeName] = useState('')
    const [productClassName, setProductClassName] = useState('')
    const [cartToVisible, setCartToVisible] = useState(false)


    const searchMaterial = (materialArr) => {
        materialArr.forEach(element => {
            if(devicee.materialId === element.id) {
                setMaterialName(element.name)
            }
        });
    }
    const searchMadeCountry = (Arr) => {
        Arr.forEach(element => {
            if(devicee.madeCountryId === element.id) {
                setMadeCountryName(element.name)
            }
        });
    }
    const searchType = (Arr) => {
        Arr.forEach(element => {
            if(devicee.typeId === element.id) {
                setTypeName(element.name)
            }
        });
    }
    const searchProductClass = (Arr) => {
        Arr.forEach(element => {
            if(devicee.productClassId === element.id) {
                setProductClassName(element.name)
            }
        });
    }


    useEffect(() => {
        fetchOneDevice(id).then(data => setDevicee(data))
        fetchTypes().then(data => device.setTypes(data))
        fetchMaterials().then(data => device.setMaterials(data))
        fetchMadeCountries().then(data => device.setMadeCountry(data))
        fetchColor().then(data => device.setColor(data))
        fetchProductClass().then(data => device.setProductClass(data))
    }, [])

    useEffect(() => {
        searchMaterial(device.materials)
        searchMadeCountry(device.madeCountry)
        searchType(device.types)
        searchProductClass(device.productClass)
        // filterColor(device.allDevices, device.colors)
    }, [device.materials, device.madeCountry, device.productClass, device.colors, device.types, device.devices])

    const korzina = (dev) => {
        if (cookies.id) {
            const fesf = dev.id
            const cookieNow = `${cookies.id}.${fesf}`
            setCookie('id', `${cookieNow}`)
        } else {
            setCookie('id', `${dev.id}`)
        }
    }

    return (
        <div className="myContainer">
            <h1 className="dev-page-title">{devicee.name}</h1>
            <Row>
                <Col md={4}>
                    <Image className='product-photo' width={'100%'} src={process.env.REACT_APP_API_URL + devicee.img} />
                </Col>
                <Col md={1}>
                </Col>
                <Col md={3}>
                    <div className="specifications">
                        <Row className='characteristic-row'><span className='title-characteristic'>Высота(см):</span> <span className="description-characteristic">{devicee.height}</span></Row>
                        <Row className='characteristic-row'><span className='title-characteristic'>Материалы:</span> <span className="description-characteristic">{materialName}</span></Row>
                        <Row className='characteristic-row'><span className='title-characteristic'>Страна изготовитель:</span> <span className="description-characteristic">{madeCountryName}</span></Row>
                        <Row className='characteristic-row'><span className='title-characteristic'>Вид:</span> <span className="description-characteristic">{typeName}</span></Row>
                        <Row className='characteristic-row'><span className='title-characteristic'>Класс:</span> <span className="description-characteristic">{productClassName}</span></Row>
                        {devicee.info.map((info, index) =>
                            <Row>
                                <span className="title-characteristic">{info.title}:</span><span className='description-characteristic'>{info.description}</span>
                            </Row>
                        )}
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                        className="by-card-device"
                    >
                        <span className="price-on-device-page">{devicee.price} руб.</span>
                        <span className='gaerger'>в наличии</span>
                        <Row className="card-btn-group">
                            <Col md={6}>
                                <button className="main-btn" onClick={() => setCartToVisible(true)}>В корзину</button>
                            </Col>
                            <Col md={6}>
                                <button className="btn-buy-for-one-click">Купить в 1 клик</button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <AddToCart devicee={devicee} show={cartToVisible} onHide={() => setCartToVisible(false)} />
        </div>
    );
});

export default DevicePage;
