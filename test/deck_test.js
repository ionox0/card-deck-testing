'use strict';

var expect = require('chai').expect,
  Deck = require('../lib/deck').Deck,
  Card = require('../lib/card').Card;

describe('Deck object tests', function(){
  var deck;
  var card;

  beforeEach(function(){
    deck = new Deck();
    card = new Card();
    deck.addCard(card);
  });

  describe('constructor', function() {
    it('deck should have card(s)', function() {
      expect(deck).to.have.property('deck');
    });
    it('deck should have length 52', function() {
      deck.should.have.length(52);
    });
  });
});
