const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('triceratops', 'herbivore', 20);
    dinosaur3 = new Dinosaur('velociraptor', 'carnivore', 40);
    dinosaur4 = new Dinosaur('bactrosaurus', 'herbivor', 18);
    dinosaur5 = new Dinosaur('velociraptor', 'carnivore', 20);
    collectionOfDinos = [dinosaur1, dinosaur2, dinosaur3]
    park = new Park('Jurassic Park', 100, collectionOfDinos);
  })

  it('should have a name', function() {
    const actual = park.name
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 100)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinoCount()
    assert.strictEqual(actual, 3)
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dinosaur4)
    const actual = park.dinoCount()
    assert.strictEqual(actual, 4)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removDino(dinosaur3)
    const actual = park.dinoCount()
    assert.strictEqual(actual, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostPopular()
    assert.deepStrictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const actual = park.particularSpecies('velociraptor')
    assert.deepStrictEqual(actual, [dinosaur3])
  });

  it('Should be able to calculate the total number of visitors per day', function() {
    const actual = park.totalVisitors()
    assert.strictEqual(actual, 110)
  })

 it('Should be able to calculate the total number of visitors per year', function() {
  const actual = park.totalYearlyVisitors()
  assert.strictEqual(actual, 40150)
 })

 it('Should be able to calculate the total revenue from ticket sales for one year', function() {
   const actual = park.totalRevenueYearly()
   assert.strictEqual(actual, 4015000)
 })

it('should be able to remove all dinosaurs of a particular species', function() {
  park.addDino(dinosaur5)
  park.removeBySpecies('velociraptor')
  const actual = park.dinoCount()
  assert.strictEqual(actual, 2)
});

it('should be able to provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function() {
  const actual = park.numberOfDiet()
  const expected = { 'carnivore': 2, 'herbivore': 1, }
  assert.deepStrictEqual(actual, expected)
})





});
