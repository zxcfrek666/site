import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createColor} from "../../http/deviceAPI";

const CreateColor = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [color, setColor] = useState('')

    const addColor = () => {
        const formData = new FormData()
        formData.append('name', value)
        formData.append('color', color)
        createColor(formData).then(data => {
            onHide()
            setValue('')
            setColor('')
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить цвет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название цвета"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        className="mt-2"
                        value={color}
                        onChange={e => setColor(e.target.value)}
                        placeholder={"Введите #цвета"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addColor}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateColor;
