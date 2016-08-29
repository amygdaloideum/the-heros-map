'use strict';

var app = require('../..');
import request from 'supertest';

var newPiece;

describe('Piece API:', function() {
  describe('GET /api/piecec', function() {
    var pieces;

    beforeEach(function(done) {
      request(app)
        .get('/api/piecec')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          pieces = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      pieces.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/piecec', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/piecec')
        .send({
          name: 'New Piece',
          info: 'This is the brand new piece!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newPiece = res.body;
          done();
        });
    });

    it('should respond with the newly created piece', function() {
      newPiece.name.should.equal('New Piece');
      newPiece.info.should.equal('This is the brand new piece!!!');
    });
  });

  describe('GET /api/piecec/:id', function() {
    var piece;

    beforeEach(function(done) {
      request(app)
        .get(`/api/piecec/${newPiece._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          piece = res.body;
          done();
        });
    });

    afterEach(function() {
      piece = {};
    });

    it('should respond with the requested piece', function() {
      piece.name.should.equal('New Piece');
      piece.info.should.equal('This is the brand new piece!!!');
    });
  });

  describe('PUT /api/piecec/:id', function() {
    var updatedPiece;

    beforeEach(function(done) {
      request(app)
        .put(`/api/piecec/${newPiece._id}`)
        .send({
          name: 'Updated Piece',
          info: 'This is the updated piece!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedPiece = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPiece = {};
    });

    it('should respond with the original piece', function() {
      updatedPiece.name.should.equal('New Piece');
      updatedPiece.info.should.equal('This is the brand new piece!!!');
    });

    it('should respond with the updated piece on a subsequent GET', function(done) {
      request(app)
        .get(`/api/piecec/${newPiece._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let piece = res.body;

          piece.name.should.equal('Updated Piece');
          piece.info.should.equal('This is the updated piece!!!');

          done();
        });
    });
  });

  describe('PATCH /api/piecec/:id', function() {
    var patchedPiece;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/piecec/${newPiece._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Piece' },
          { op: 'replace', path: '/info', value: 'This is the patched piece!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedPiece = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedPiece = {};
    });

    it('should respond with the patched piece', function() {
      patchedPiece.name.should.equal('Patched Piece');
      patchedPiece.info.should.equal('This is the patched piece!!!');
    });
  });

  describe('DELETE /api/piecec/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/piecec/${newPiece._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when piece does not exist', function(done) {
      request(app)
        .delete(`/api/piecec/${newPiece._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
