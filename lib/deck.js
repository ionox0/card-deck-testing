'use strict';

exports.Deck = function(){

  function Constructor() {}
  Constructor.prototype.deck = [];
  Constructor.prototype.addCard = function(card){
    Constructor.prototype.deck.push(card);
  };
  Constructor.prototype.countCards = function() {
    return Constructor.prototype.deck.length;
  };

  return new Constructor();

};
