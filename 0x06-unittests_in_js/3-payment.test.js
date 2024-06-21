const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use the calculateNumber method of Utils', () => {
    const sinon_spy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(sinon_spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(sinon_spy.calculateNumber.callCount).to.be.equal(1);
    sinon_spy.calculateNumber.restore();
  });
});
