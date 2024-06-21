const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let sinon_spy;

  beforeEach(() => {
    if (!sinon_spy) {
      sinon_spy = sinon.spy(console);
    }
  });

  afterEach(() => {
    sinon_spy.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(sinon_spy.log.calledWith('The total is: 120')).to.be.true;
    expect(sinon_spy.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(sinon_spy.log.calledWith('The total is: 20')).to.be.true;
    expect(sinon_spy.log.calledOnce).to.be.true;
  });
});
