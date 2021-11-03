import React, { useState, useContext, useEffect} from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Image, Row, Col } from "react-bootstrap";
import { Context } from "../../index";

const AddToCart = ({ devicee, show, onHide }) => {
    const { device } = useContext(Context)
    const [countValue, setCountValue] = useState(1)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        setPrice(devicee.price * countValue)
    }, [countValue])

    const pluseCount = () => {
        setCountValue(countValue + 1)
    }

    const minusCount = () => {
        setCountValue(countValue - 1)
    }

    const addInCart = () => {
        let locStor = (JSON.parse(localStorage.getItem('cart')));
        if (locStor === null) {
            locStor = []
        }
        let result = locStor;
        result.push({ id: devicee.id, name: devicee.name, img: devicee.img, price: devicee.price, count: countValue })
        localStorage.setItem('cart', JSON.stringify(result))
        device.setCart(result)
        onHide()
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton className='gsergerg'>
                <Modal.Title id="contained-modal-title-vcenter">
                    Товар добавлен в корзину
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="pt-4 pb-4">
                    <Col md={2}>
                        <Image style={{ width: '100%' }} src={process.env.REACT_APP_API_URL + devicee.img} />
                    </Col>
                    <Col md={5} className='namr-gaserg'>
                        <span className='name-in-maodl-basket'>{devicee.name}</span>
                    </Col>
                    <Col md={2} className='namr-gaserg'>
                        <div className='count-product'>
                            <div onClick={() => minusCount()} className='count-product-item minus'>
                                <span>-</span>
                            </div>
                            <div className='count-product-item'>
                                <input
                                    value={countValue}
                                    onChange={e => setCountValue(Number(e.target.value))}
                                />
                            </div>
                            <div onClick={() => pluseCount()} className='count-product-item pulse'>
                                <span>+</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={2} className='namr-gaserg'>
                        <span className={'price-model-basket'}>{price} руб.</span>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addInCart}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddToCart;
