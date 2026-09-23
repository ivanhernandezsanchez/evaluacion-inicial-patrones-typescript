"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StoreSettings {
    static instance;
    currency;
    storeName;
    constructor() {
        this.currency = "EUR";
        this.storeName = "Lecturas del Norte";
    }
    static getInstance() {
        if (StoreSettings.instance === undefined) {
            StoreSettings.instance = new StoreSettings();
        }
        return StoreSettings.instance;
    }
    getCurrency() {
        return this.currency;
    }
    setCurrency(currency) {
        this.currency = currency;
    }
    getStoreName() {
        return this.storeName;
    }
}
const firstSettings = StoreSettings.getInstance();
const secondSettings = StoreSettings.getInstance();
console.log("Nombre de la tienda:");
console.log(firstSettings.getStoreName());
console.log("¿Es la misma configuración?");
console.log(firstSettings === secondSettings);
console.log("Moneda inicial:");
console.log(firstSettings.getCurrency());
firstSettings.setCurrency("GBP");
console.log("Moneda vista desde la segunda instancia:");
console.log(secondSettings.getCurrency());
//# sourceMappingURL=index.js.map