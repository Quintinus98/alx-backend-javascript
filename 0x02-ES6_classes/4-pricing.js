import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter & Setter amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof (value) !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // Getter & Setter currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (Object.getPrototypeOf(value) !== Currency.prototype) {
      throw TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} ${this.currency.code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
