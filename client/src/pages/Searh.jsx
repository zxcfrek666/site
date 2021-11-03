import React, { useContext, useEffect, useState } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DeviceList from "../components/DeviceList";
import { Context } from "../index";
import { fetchDevices } from "../http/deviceAPI";
import { observer } from "mobx-react-lite";

const Searh = observer(() => {
    const { device } = useContext(Context)
    const [currentProduct, setCurrentProduct] = useState([]);

    useEffect(() => {
        fetchDevices().then(data => {
            device.setAllDevices(data.rows)
        })
    }, [])
    useEffect(() => {
        fetchDevices().then(data => {
            const textSearch = device.search;
            const result = device.allDevices.filter(item => {
                return item.name.toLowerCase().includes(textSearch.toLowerCase())
            })
            setCurrentProduct(result)
        })
    }, [device.search])

    return (
        <div className="myContainer">
            <h1 style={{ padding: '20px 0' }}>Товары по вашему запросу</h1>
            <Col md={12}>
                <DeviceList currentProduct={currentProduct} />
            </Col>
        </div>
    )
});

export default Searh;
