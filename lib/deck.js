'use strict';

exports.Deck = function(){

  var cards = [];

  function Constructor() {}
  Constructor.prototype.addCard = function(card){
    cards.push(card);
  };
  
  Constructor.prototype.countCards = function() {
    return cards.length;
  };

  return new Constructor();

};
