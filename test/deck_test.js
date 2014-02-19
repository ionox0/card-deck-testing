'use strict';

var expect = require('chai').expect,
  Deck = require('../lib/deck').Deck,
  Card = require('../lib/card').Card;

describe('Deck object tests', function(){
  var deck;


  beforeEach(function(){
    deck = new Deck();
    var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    for (var suit in suits){
      for (var i = 0; i < 13; i++){
        deck.addCard(new Card(suit, i));
      }
    }
  });

  describe('constructor', function() {
    it('deck should have card(s)', function() {
      expect(deck).to.have.property('deck');
    });
    it('deck should have proper number of cards', function() {
      expect(deck.countCards()).to.equal(52);
    });
  });
});
