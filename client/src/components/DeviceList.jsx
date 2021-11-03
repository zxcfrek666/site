import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(({ currentProduct }) => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            {currentProduct.map(devicee =>
                <DeviceItem key={devicee.id} devicee={devicee} materials={device.materials} md={4}/>
            )}
        </Row>
    );
});

export default DeviceList;
