"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CardPaymentGateway {
    pay(amount) {
        console.log(`Pago con tarjeta realizado: ${amount} euros`);
    }
}
class BankTransferGateway {
    pay(amount) {
        console.log(`Transferencia bancaria iniciada: ${amount} euros`);
    }
}
class FakePaymentGateway {
    payments = [];
    pay(amount) {
        this.payments.push(amount);
    }
    getPayments() {
        return [...this.payments];
    }
}
class CheckoutService {
    paymentGateway;
    constructor(paymentGateway) {
        this.paymentGateway = paymentGateway;
    }
    checkout(total) {
        console.log(`Procesando pedido por ${total} euros`);
        this.paymentGateway.pay(total);
    }
}
const cardGateway = new CardPaymentGateway();
const cardCheckout = new CheckoutService(cardGateway);
cardCheckout.checkout(42);
const bankGateway = new BankTransferGateway();
const bankCheckout = new CheckoutService(bankGateway);
bankCheckout.checkout(75);
const fakeGateway = new FakePaymentGateway();
const testCheckout = new CheckoutService(fakeGateway);
testCheckout.checkout(18);
testCheckout.checkout(25);
console.log("Pagos registrados por el gateway falso:");
console.log(fakeGateway.getPayments());
//# sourceMappingURL=index.js.map