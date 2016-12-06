import EntityAdapter from '../../src/sources/_EntityAdapter';

/*
 * There is just a test example
 */

const ENTITY = {id: 1, sortIndex: 0};
const store = { get() {} };
const adapter = new EntityAdapter(store);

describe('EntityAdapter', function () {

  beforeEach(function () {
    this.storeMock = sinon.mock(store);
  });

  describe('get', function () {

    it('should call store method with id', function () {
      this.storeMock.expects('get')
                    .once()
                    .withExactArgs(ENTITY.id)
                    .returns(Promise.resolve(ENTITY));


      adapter.get(ENTITY.id);
      this.storeMock.verify();
    });

    it('should return store promise with response', function (done) {
      this.storeMock.expects('get')
                    .returns(Promise.resolve(ENTITY));

      const successSpy = sinon.spy();
      const promise = adapter.get(ENTITY.id);

      promise.then(successSpy);
      setTimeout(() => {
        expect(successSpy.calledWith(ENTITY)).to.equal(true);
        done();
      }, 0);
    });
  });
});
