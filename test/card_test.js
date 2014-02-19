var expect = require('chai').expect;
Card = require('../lib/card').Card;
Deck = require('../lib/deck').Deck;


describe('Card object tests', function(){
  var card;

  beforeEach(function(){
    card = new Card('hearts', 8);
  });

  describe('constructor', function() {
    it('card should be truthy (exists)', function(){
      expect(card).to.be.ok;
    });
    it('card should have suit property', function() {
      expect(card).to.have.property('suit');
    });
    it('card should have rank property', function() {
      expect(card).to.have.property('rank');
    });
  });
});


