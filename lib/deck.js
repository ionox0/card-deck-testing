'use strict';

exports.Deck = function(){

  function Constructor() {}
  Constructor.prototype.deck = [];
  Constructor.prototype.addCard = function(card){
    this.deck.push(card);
  };
  Constructor.prototype.countCards = function() {
    return this.deck.length;
  };

  return new Constructor();

};
