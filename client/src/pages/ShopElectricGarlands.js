import React, { useContext, useEffect, useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchColor, fetchDevices, fetchTypes, fetchMaterials, fetchMadeCountries, fetchProductClass } from "../http/deviceAPI";
import Pages from "../components/Pages";
import { Pagination } from '../components/Pagination';
import Slider from '@mui/material/Slider';

const Shop = observer(() => {

    const { device } = useContext(Context)
    const [value, setValue] = useState([0, 1312302453])
    const [deviceee, setDeviceee] = useState([])
    const [valueHeight, setvalueHeight] = useState([0, 1312302453])
    const [selectMaterial, setSelectMaterial] = useState([])
    const [selectMade, setSelectMade] = useState([])
    const [selectType, setSelectType] = useState([])
    const [selectClass, setSelectClass] = useState([])
    const [selectColor, setSelectColor] = useState([])
    const [fiterTypes, setFiterTypes] = useState([])
    const [useMaterials, setUseMaterials] = useState([])
    const [useMadeCountry, setUseMadeCountry] = useState([])
    const [useType, setUseType] = useState([])
    const [useClass, setUseClass] = useState([])
    const [useColor, setUseColor] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(9)
    const [openFilter, setOpenFilter] = useState(false)

    const filetMob = () => {
        setOpenFilter(true)
        const body = document.querySelector('body');
        body.classList.add('no-scroll')
    }
    const closeFilter = () => {
        setOpenFilter(false)
        const body = document.querySelector('body');
        body.classList.remove('no-scroll')
    }
    const updateRange = (e, data) => {
        setValue(data)
    }
    const updateRangeHeight = (e, data) => {
        setvalueHeight(data)
    }
    const setOrDeleteTypes = (id) => {
        let gser = true;
        if (selectMaterial !== 0) {
            selectMaterial.forEach(element => {
                if (element === id) {
                    gser = false;
                }
            });
        }
        let result = selectMaterial
        if (gser === true) {
            let newArr = result.filter(item => true)
            newArr.push(id)
            setSelectMaterial(newArr)
        }
        if (gser === false) {
            let newArr = result.filter(item => item !== id)
            setSelectMaterial(newArr)
        }
    }

    const setOrDeleteCountry = (id) => {
        let gser = true;
        if (selectMade !== 0) {
            selectMade.forEach(element => {
                if (element === id) {
                    gser = false;
                }
            });
        }
        let result = selectMade
        if (gser === true) {
            let newArr = result.filter(item => true)
            newArr.push(id)
            setSelectMade(newArr)
        }
        if (gser === false) {
            let newArr = result.filter(item => item !== id)
            setSelectMade(newArr)
        }
    }

    const setOrDeleteType = (id) => {
        let gser = true;
        if (selectType !== 0) {
            selectType.forEach(element => {
                if (element === id) {
                    gser = false;
                }
            });
        }
        let result = selectType
        if (gser === true) {
            let newArr = result.filter(item => true)
            newArr.push(id)
            setSelectType(newArr)
        }
        if (gser === false) {
            let newArr = result.filter(item => item !== id)
            setSelectType(newArr)
        }
    }

    const setOrDeleteClass = (id) => {
        let gser = true;
        if (selectClass !== 0) {
            selectClass.forEach(element => {
                if (element === id) {
                    gser = false;
                }
            });
        }
        let result = selectClass
        if (gser === true) {
            let newArr = result.filter(item => true)
            newArr.push(id)
            setSelectClass(newArr)
        }
        if (gser === false) {
            let newArr = result.filter(item => item !== id)
            setSelectClass(newArr)
        }
    }

    const setOrDeleteColor = (id) => {
        let gser = true;
        if (selectColor !== 0) {
            selectColor.forEach(element => {
                if (element === id) {
                    gser = false;
                }
            });
        }
        let result = selectColor
        if (gser === true) {
            let newArr = result.filter(item => true)
            newArr.push(id)
            setSelectColor(newArr)
        }
        if (gser === false) {
            let newArr = result.filter(item => item !== id)
            setSelectColor(newArr)
        }
    }

    const productFilter = (dataa, value1, value2, valueHeight1, valueHeight2) => {
        let result = []
        dataa.forEach(element => {
            if (value1 <= element.price && element.price <= value2) {
                result.push(element);
            }
        });
        if (valueHeight2 !== 0) {
            const newArr = result.filter(element => valueHeight1 <= element.height && element.height <= valueHeight2)
            result = newArr;
        }
        if (selectMaterial.length !== 0) {
            const newArr = result.filter(made => selectMaterial.includes(made.materialId))
            result = newArr;
        };
        if (selectMade.length !== 0) {
            const newArr = result.filter(made => selectMade.includes(made.madeCountryId))
            result = newArr;
        };
        if (selectType.length !== 0) {
            const newArr = result.filter(made => selectType.includes(made.typeId))
            result = newArr;
        };
        if (selectClass.length !== 0) {
            const newArr = result.filter(made => selectClass.includes(made.productClassId))
            result = newArr;
        };
        if (selectColor.length !== 0) {
            const newArr = result.filter(made => selectColor.includes(made.colorId))
            result = newArr;
        };
        return result;
    }
    const filterMaterial = (allDevices, allMaterials) => {
        let idArr = []
        allDevices.forEach(element => {
            if (!idArr.includes(element.materialId)) {
                idArr.push(element.materialId)
            }
        });
        const filterMaterials = allMaterials.filter(material => idArr.includes(material.id))
        setUseMaterials(filterMaterials)
    }
    const filterMadeCountry = (allDevices, allMadeCountry) => {
        let idArr = []
        allDevices.forEach(element => {
            if (!idArr.includes(element.madeCountryId)) {
                idArr.push(element.madeCountryId)
            }
        });
        const filterMade = allMadeCountry.filter(made => idArr.includes(made.id))
        setUseMadeCountry(filterMade)
    }

    const filterType = (allDevices, allType) => {
        let idArr = []
        allDevices.forEach(element => {
            if (!idArr.includes(element.typeId)) {
                idArr.push(element.typeId)
            }
        });
        const filterType = allType.filter(type => idArr.includes(type.id))
        setUseType(filterType)
    }

    const filterProductClass = (allDevices, allClass) => {
        let idArr = []
        allDevices.forEach(element => {
            if (!idArr.includes(element.productClassId)) {
                idArr.push(element.productClassId)
            }
        });
        const filterClass = allClass.filter(cl => idArr.includes(cl.id))
        setUseClass(filterClass)
    }

    const filterColor = (allDevices, allColors) => {
        let idArr = []
        allDevices.forEach(element => {
            if (!idArr.includes(element.colorId)) {
                idArr.push(element.colorId)
            }
        });
        const filterColor = allColors.filter(color => idArr.includes(color.id))
        setUseColor(filterColor)
    }

    const maxPrice = (dataa) => {
        let maxPrice = 0;
        dataa.forEach(element => {
            if (element.price > maxPrice) {
                maxPrice = element.price
            }
        });
        return maxPrice;
    }
    const maxHeight = (dataa) => {
        let max = 0;
        dataa.forEach(element => {
            if (element.height > max) {
                max = element.height
            }
        });
        return max;
    }
    useEffect(() => {
        fetchDevices().then(data => {
            device.setAllDevices(data.rows)
        })
        fetchTypes().then(data => device.setTypes(data))
        fetchMaterials().then(data => device.setMaterials(data))
        fetchMadeCountries().then(data => device.setMadeCountry(data))
        fetchColor().then(data => device.setColor(data))
        fetchProductClass().then(data => device.setProductClass(data))
    }, [])
    useEffect(() => {
        let newArr = device.allDevices.filter(item => item.brandId === 3)
        setDeviceee(newArr)
        let maxPricee = maxPrice(newArr);
        let maxHeightt = maxHeight(newArr)
        device.setMaxHeight(maxHeightt)
        device.setMaxPrice(maxPricee)
        setvalueHeight([0, maxHeightt])
        setValue([0, maxPricee])
    }, [device.allDevices])
    useEffect(() => {
        filterMaterial(deviceee, device.materials)
        filterMadeCountry(deviceee, device.madeCountry)
        filterType(deviceee, device.types)
        filterProductClass(deviceee, device.productClass)
        filterColor(deviceee, device.colors)

    }, [deviceee, device.materials, device.madeCountry, device.productClass, device.colors, device.types])

    useEffect(() => {
        let result = productFilter(deviceee, value[0], value[1], valueHeight[0], valueHeight[1])
        device.setDevices(result)
        setCurrentPage(1)
    }, [device.page, device.selectedType, device.selectedBrand, value, valueHeight, selectMaterial, selectMade, selectType, selectClass, selectColor])

    const lastProductIndex = currentPage * countriesPerPage;
    const firstProductIndex = lastProductIndex - countriesPerPage;
    const currentProduct = device.devices.slice(firstProductIndex, lastProductIndex)

    const paginate = (numberPage) => {
        setCurrentPage(numberPage)
    }
    return (
        <div>
            <div className="myContainer">
                <h1 className="title-page-shop" style={{ padding: '20px 0' }}>Электрогирлянды</h1>
                <div className="button-filter-block">
                    <button className="main-btn-fix-w" onClick={() => filetMob()}>
                        Фильтры
                    </button>
                </div>
                <Row className="mt-2">
                    <Col sm={12} md={4} lg={4} xl={3} xxl={3}>
                        <div className="d-filter">
                            <div className="filter">
                                <h4>Фильтр подбора</h4>
                                <div className="block-filter">
                                    <p className="title-filter">Высота(см)</p>
                                    <div className="inputs-range-slider">
                                        <input
                                            value={valueHeight[0]}
                                            onChange={e => setvalueHeight([e.target.value, valueHeight[1]])}
                                        />
                                        <input
                                            value={valueHeight[1]}
                                            onChange={e => setvalueHeight([valueHeight[0], e.target.value])}
                                        />
                                    </div>
                                    <div>
                                        <Slider
                                            sx={{
                                                marginTop: 2,
                                                width: '100%',
                                                color: 'green',
                                            }}
                                            min={0}
                                            max={device.maxHeight}
                                            step={10}
                                            value={valueHeight}
                                            onChange={updateRangeHeight}
                                        />
                                    </div>
                                </div>
                                <div className="block-filter">
                                    <p className="title-filter">Цена</p>
                                    <div className="inputs-range-slider">
                                        <input
                                            value={value[0]}
                                            onChange={e => setValue([e.target.value, value[1]])}
                                        />
                                        <input
                                            value={value[1]}
                                            onChange={e => setValue([value[0], e.target.value])}
                                        />
                                    </div>
                                    <div>
                                        <Slider
                                            sx={{
                                                marginTop: 2,
                                                width: '100%',
                                                color: 'green',
                                            }}
                                            min={0}
                                            max={device.maxPrice}
                                            step={10}
                                            value={value}
                                            onChange={updateRange}
                                        />
                                    </div>
                                </div>
                                <div className="block-filter-item">
                                    <p className="title-filter">Материалы</p>
                                    <div className="filterButton">
                                        {useMaterials.map(item =>
                                            <label key={item.id}>
                                                <input type="checkbox" onClick={() => setOrDeleteTypes(item.id)} />
                                                <span className="filter-item" style={{ paddingLeft: 10 }}>{item.name}</span>
                                            </label>
                                        )}
                                    </div>
                                </div>
                                <div className="block-filter-item">
                                    <p className="title-filter">Страна изготовитель</p>
                                    <div className="filterButton">
                                        {useMadeCountry.map(item =>
                                            <label key={item.id}>
                                                <input type="checkbox" onClick={() => setOrDeleteCountry(item.id)} />
                                                <span className="filter-item" style={{ paddingLeft: 10 }}>{item.name}</span>
                                            </label>
                                        )}
                                    </div>
                                </div>
                                <div className="block-filter-item">
                                    <p className="title-filter">Вид</p>
                                    <div className="filterButton">
                                        {useType.map(item =>
                                            <label key={item.id}>
                                                <input type="checkbox" onClick={() => setOrDeleteType(item.id)} />
                                                <span className="filter-item" style={{ paddingLeft: 10 }}>{item.name}</span>
                                            </label>
                                        )}
                                    </div>
                                </div>
                                <div className="block-filter-item">
                                    <p className="title-filter">Класс</p>
                                    <div className="filterButton">
                                        {useClass.map(item =>
                                            <label key={item.id}>
                                                <input type="checkbox" onClick={() => setOrDeleteClass(item.id)} />
                                                <span className="filter-item" style={{ paddingLeft: 10 }}>{item.name}</span>
                                            </label>
                                        )}
                                    </div>
                                </div>
                                <div className="block-filter-item">
                                    <p className="title-filter">Цвет</p>
                                    <div className="filterButton">
                                        {useColor.map(item =>
                                            <label key={item.id}>
                                                <div className="color-filter">
                                                    <input type="checkbox" onClick={() => setOrDeleteColor(item.id)} />
                                                    <div className='color-circle ml-2' style={{ background: item.color }}></div>
                                                    <span className="filter-item" style={{ paddingLeft: 10 }}>{item.name}</span>
                                                </div>
                                            </label>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={8} lg={8} xl={9} xxl={9}>
                        {currentProduct.length !== 0
                            ?
                            <DeviceList currentProduct={currentProduct} />
                            :
                            <div className="empty-product">
                                <h2>
                                    Нет товаров по вашем фильтрам
                                </h2>
                            </div>
                        }
                        <Pagination countriesPerPage={countriesPerPage} totalProduct={device.devices.length} paginate={paginate} />
                        <Pages />
                    </Col>
                </Row>
            </div>
            <div className={openFilter ? 'm-filter active' : 'm-filter'}>
                <div className="filter">
                    <div className='title-filter-close'>
                        <span className="title-filter-m">Фильтр подбора</span>
                        <span onClick={() => closeFilter()}>x</span>
                    </div>
                    <div className="block-filter">
                        <p className="title-filter">Высота(см)</p>
                        <div className="inputs-range-slider">
                            <input
                                value={valueHeight[0]}
                                onChange={e => setvalueHeight([e.target.value, valueHeight[1]])}
                            />
                            <input
                                value={valueHeight[1]}
                                onChange={e => setvalueHeight([valueHeight[0], e.target.value])}
                            />
                        </div>
                        <div>
                            <Slider
                                sx={{
                                    marginTop: 2,
                                    width: '100%',
                                    color: 'green',
                                }}
                                min={0}
                                max={device.maxHeight}
                                step={10}
                                value={valueHeight}
                                onChange={updateRangeHeight}
                            />
                        </div>
                    </div>
                    <div className="block-filter">
                        <p className="title-filter">Цена</p>
                        <div className="inputs-range-slider">
                            <input
                                value={value[0]}
                                onChange={e => setValue([e.target.value, value[1]])}
                            />
                            <input
                                value={value[1]}
                                onChange={e => setValue([value[0], e.target.value])}
                            />
                        </div>
                        <div>
                            <Slider
                                sx={{
                                    marginTop: 2,
                                    width: '100%',
                                    color: 'green',
                                }}
                                min={0}
                                max={device.maxPrice}
                                step={10}
                                value={value}
                                onChange={updateRange}
                            />
                        </div>
                    </div>
                    <div className="block-filter-item">
                        <p className="title-filter">Материалы</p>
                        <div className="filterButton">
                            {useMaterials.map(item =>
                                <label key={item.id}>
                                    <input type="checkbox" onClick={() => setOrDeleteTypes(item.id)} />
                                    <span className="filter-item" style={{ paddingLeft: 10 }}>{item.name}</span>
                                </label>
                            )}
                        </div>
                    </div>
                    <div className="block-filter-item">
                        <p className="title-filter">Страна изготовитель</p>
                        <div className="filterButton">
                            {useMadeCountry.map(item =>
                                <label key={item.id}>
                                    <input type="checkbox" onClick={() => setOrDeleteCountry(item.id)} />
                                    <span className="filter-item" style={{ paddingLeft: 10 }}>{item.name}</span>
                                </label>
                            )}
                        </div>
                    </div>
                    <div className="block-filter-item">
                        <p className="title-filter">Вид</p>
                        <div className="filterButton">
                            {useType.map(item =>
                                <label key={item.id}>
                                    <input type="checkbox" onClick={() => setOrDeleteType(item.id)} />
                                    <span className="filter-item" style={{ paddingLeft: 10 }}>{item.name}</span>
                                </label>
                            )}
                        </div>
                    </div>
                    <div className="block-filter-item">
                        <p className="title-filter">Класс</p>
                        <div className="filterButton">
                            {useClass.map(item =>
                                <label key={item.id}>
                                    <input type="checkbox" onClick={() => setOrDeleteClass(item.id)} />
                                    <span className="filter-item" style={{ paddingLeft: 10 }}>{item.name}</span>
                                </label>
                            )}
                        </div>
                    </div>
                    <div className="block-filter-item">
                        <p className="title-filter">Цвет</p>
                        <div className="filterButton">
                            {useColor.map(item =>
                                <label key={item.id}>
                                    <div className="color-filter">
                                        <input type="checkbox" onClick={() => setOrDeleteColor(item.id)} />
                                        <div className='color-circle ml-2' style={{ background: item.color }}></div>
                                        <span className="filter-item" style={{ paddingLeft: 10 }}>{item.name}</span>
                                    </div>
                                </label>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Shop;
