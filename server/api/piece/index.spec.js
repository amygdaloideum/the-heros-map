'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var pieceCtrlStub = {
  index: 'pieceCtrl.index',
  show: 'pieceCtrl.show',
  create: 'pieceCtrl.create',
  upsert: 'pieceCtrl.upsert',
  patch: 'pieceCtrl.patch',
  destroy: 'pieceCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var pieceIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './piece.controller': pieceCtrlStub
});

describe('Piece API Router:', function() {
  it('should return an express router instance', function() {
    pieceIndex.should.equal(routerStub);
  });

  describe('GET /api/piecec', function() {
    it('should route to piece.controller.index', function() {
      routerStub.get
        .withArgs('/', 'pieceCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/piecec/:id', function() {
    it('should route to piece.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'pieceCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/piecec', function() {
    it('should route to piece.controller.create', function() {
      routerStub.post
        .withArgs('/', 'pieceCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/piecec/:id', function() {
    it('should route to piece.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'pieceCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/piecec/:id', function() {
    it('should route to piece.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'pieceCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/piecec/:id', function() {
    it('should route to piece.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'pieceCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
