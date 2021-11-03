import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createMaterial = async (material) => {
    const {data} = await $authHost.post('api/material', material)
    return data
}

export const fetchMaterials = async () => {
    const {data} = await $host.get('api/material')
    return data
}

export const createProductClass = async (productClass) => {
    const {data} = await $authHost.post('api/productClass', productClass)
    return data
}

export const fetchProductClass = async () => {
    const {data} = await $host.get('api/productClass')
    return data
}

export const createColor = async (color) => {
    const {data} = await $authHost.post('api/color', color)
    return data
}

export const fetchColor = async () => {
    const {data} = await $host.get('api/color')
    return data
}

export const createMadeCountry = async (madeCountry) => {
    const {data} = await $authHost.post('api/madeCountry', madeCountry)
    return data
}

export const fetchMadeCountries = async () => {
    const {data} = await $host.get('api/madeCountry')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, brandId=1, page, limit= 22, value1, value2) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit, value1, value2,
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

export const fetchSomeDevice = async (id) => {
    const {data} = await $host.get('api/device/s/', {params: {
        id
    }})
    return data
}
