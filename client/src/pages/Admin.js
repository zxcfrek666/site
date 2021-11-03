import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import CreateMaterial from "../components/modals/CreateMaterial";
import CreateMadeCountry from "../components/modals/CreateMadeCountry";
import CreateProductClass from "../components/modals/CreateProductClass";
import CreateColor from "../components/modals/CreateColor";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [materialVisible, setMaterialVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [madeCountryVisible, setMadeCountryVisible] = useState(false)
    const [productClassVisible, setProductClassVisible] = useState(false)
    const [colorVisible, setColorVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить категорию
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setMaterialVisible(true)}
            >
                Добавить материал
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setMadeCountryVisible(true)}
            >
                Добавить страну производитель
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setProductClassVisible(true)}
            >
                Добавить класс
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setColorVisible(true)}
            >
                Добавить цвет
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateColor show={colorVisible} onHide={() => setColorVisible(false)}/>
            <CreateMadeCountry show={madeCountryVisible} onHide={() => setMadeCountryVisible(false)}/>
            <CreateMaterial show={materialVisible} onHide={() => setMaterialVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateProductClass show={productClassVisible} onHide={() => setProductClassVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;
