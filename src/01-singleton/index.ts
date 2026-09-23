class StoreSettings {
  private static instance: StoreSettings | undefined;

  private currency: string;
  private storeName: string;

  private constructor() {
    this.currency = "EUR";
    this.storeName = "Lecturas del Norte";
  }

  public static getInstance(): StoreSettings {
    if (StoreSettings.instance === undefined) {
      StoreSettings.instance = new StoreSettings();
    }

    return StoreSettings.instance;
  }

  public getCurrency(): string {
    return this.currency;
  }
   public setCurrency(currency: string): void {
    this.currency = currency;
  }

  public getStoreName(): string {
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


