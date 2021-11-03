import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._colors = []
        this._madeCountry = []
        this._productClass = []
        this._brands = []
        this._devices = []
        this._allDevices = []
        this._selectedType = {}
        this._selectedColor = {}
        this._selectedMadeCountry = {}
        this._selectedProductClass = {}
        this._selectedTypes = []
        this._selectedBrand = {}
        this._selectedMaterial = []
        this._page = 1
        this._totalCount = 0
        this._limit = 7
        this._maxPrice = 0;
        this._maxHeight = 0;
        this._materials = []
        this._search = '';
        this._favorite = [];
        this._cart = [];
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setCart(cart) {
        this._cart = cart
    }
    setFavorite(favorite) {
        this._favorite = favorite
    }
    setSearch(search) {
        this._search = search
    }
    setMaterials(materials) {
        this._materials = materials
    }
    setMadeCountry(madeCountry) {
        this._madeCountry = madeCountry
    }
    setProductClass(productClass) {
        this._productClass = productClass
    }
    setColor(colors) {
        this._colors = colors
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setAllDevices(allDevices) {
        this._allDevices = allDevices
    }
    setMaxPrice(maxPrice) {
        this._maxPrice = maxPrice
    }
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedTypes(types) {
        this.setPage(1)
        this._selectedTypes = types
    }
    setmadd(made) {
        this.setPage(1)
        this._selectedMadeCountry = made
    }
    setSelectedMaterial(material) {
        this.setPage(1)
        this._selectedMaterial = material
    }
    setSelectedColor(selectedColor) {
        this.setPage(1)
        this._selectedColor = selectedColor
    }
    setSelectedProductClass(selectedProductClass) {
        this.setPage(1)
        this._selectedProductClass = selectedProductClass
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    setMaxHeight(max) {
        this._maxHeight = max
    }
    get devices() {
        return this._devices
    }
    get cart() {
        return this._cart
    }
    get allDevices() {
        return this._allDevices
    }
    get types() {
        return this._types
    }
    get favorite() {
        return this._favorite
    }
    get colors() {
        return this._colors
    }
    get materials() {
        return this._materials
    }
    get brands() {
        return this._brands
    }
    get maxPrice() {
        return this._maxPrice
    }
    get search() {
        return this._search
    }
    get madeCountry() {
        return this._madeCountry
    }
    get productClass() {
        return this._productClass
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedTypes() {
        return this._selectedTypes
    }
    get selectedMadeCountry() {
        return this._selectedMadeCountry
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get selectedMaterial() {
        return this._selectedMaterial
    }
    get selectedColor() {
        return this._selectedColor
    }
    get selectedProductClass() {
        return this._selectedProductClass
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
    get maxHeight() {
        return this._maxHeight
    }
}
