const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let park
let stegosaurus
let tricerotops
let diplodocus
let pterasaur

  beforeEach(function () {
    park = new Park('Jurassic Park')
    stegosaurus = new Dinosaur ('stegosaurus', 'herbivore', 35)
    triceratops = new Dinosaur('tricerotops', 'herbivore', 35)
    diplodocus = new Dinosaur('diplodocus', 'herbivore', 40)
    pterasaur = new Dinosaur('pterasaur', 'carnivore', 60)
    
  })

  it('should have a name', function () {
    const park = new Park('Jurassic Park')
    const actual = park.name
    assert.strictEqual('Jurassic Park', actual)
  })

  it('should have a ticket price', function () {
    const park = new Park('Jurassic Park', '£20')
    const actual = park.ticket_price
    assert.strictEqual('£20', actual)
  })

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs
    assert.deepStrictEqual(['t-Rex', 'stegosaurus', 'tricerotops'], ['t-Rex', 'stegosaurus', 'tricerotops'])
  
  })

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur('pterasaur')
    park.addDinosaur('diplodocus')
    const actual = park.collection_of_dinosaurs
    assert.deepStrictEqual(actual, ['pterasaur', 'diplodocus'])
  })

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur('pterasaur')
    park.addDinosaur('diplodocus')
    park.removeDinosaur('pterasaur')
    const actual = park.collection_of_dinosaurs
    assert.deepStrictEqual(actual, ['diplodocus'])
  })

  xit('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur('pterasaur', 'carnivore', 60)
    park.addDinosaur('diplodocus', 'herbivore', 40)
      const actual = park.guestsAttractedPerDay();
      assert.deepStrictEqual(actual, pterasaur);
    });
  })

  xit('should be able to find all dinosaurs of a particular species')
      

  it('should be able to calculate the total number of visitors per day', function () {
      const actual = collection_of_dinosaurs.numberOfVisitorsPerDay()
      assert.strictEqual(actual, 0)
})


  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');


