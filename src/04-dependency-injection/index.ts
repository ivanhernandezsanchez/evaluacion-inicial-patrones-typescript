interface PaymentGateway {
  pay(amount: number): void;
}

class CardPaymentGateway implements PaymentGateway {
  public pay(amount: number): void {
    console.log(`Pago con tarjeta realizado: ${amount} euros`);
  }
}

class BankTransferGateway implements PaymentGateway {
  public pay(amount: number): void {
    console.log(`Transferencia bancaria iniciada: ${amount} euros`);
  }
}

class FakePaymentGateway implements PaymentGateway {
  private payments: number[] = [];

  public pay(amount: number): void {
    this.payments.push(amount);
  }

  public getPayments(): number[] {
    return [...this.payments];
  }
}

class CheckoutService {
  constructor(private readonly paymentGateway: PaymentGateway) {}

  public checkout(total: number): void {
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

