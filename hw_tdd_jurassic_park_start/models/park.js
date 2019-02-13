const Park = function (name, ticketPrice, collectionOfDinos){
  this.name = name
  this.ticketPrice = ticketPrice
  this.collectionOfDinos = collectionOfDinos
}

Park.prototype.dinoCount = function () {
  return this.collectionOfDinos.length
};

Park.prototype.addDino = function (dinosaur) {
  this.collectionOfDinos.push(dinosaur)
};

Park.prototype.removDino = function (dinosaur) {
  const position = this.collectionOfDinos.indexOf(dinosaur);
  return this.collectionOfDinos.splice(position, 1);
};

Park.prototype.mostPopular = function () {
  let mostPopularDino = this.collectionOfDinos.sort(function(b, a) {
    return a.guestsAttractedPerDay - b.guestsAttractedPerDay})
    return mostPopularDino[0]

};


Park.prototype.particularSpecies = function (species) {
  let dinoSpecies = [];
  for (dinosaur of this.collectionOfDinos) {
    if (dinosaur.species === species) {
      dinoSpecies.push(dinosaur);
    }
  }
  return dinoSpecies
};


Park.prototype.totalVisitors = function () {
  let totalVisitors = 0
  for (dinosaur of this.collectionOfDinos) {
      totalVisitors += dinosaur.guestsAttractedPerDay
  };
return totalVisitors;
};

Park.prototype.totalYearlyVisitors = function () {
  return this.totalVisitors() * 365;
};

Park.prototype.totalRevenueYearly = function () {
  return this.totalYearlyVisitors() * this.ticketPrice
};




Park.prototype.removeBySpecies = function (species) {
  let foundDino = this.particularSpecies(species)
  for (let dinosaur of foundDino) {
      this.removDino(dinosaur)
  };

  Park.prototype.numberOfDiet = function () {
    diets = { 'carnivore': 0, 'herbivore': 0 };
    for (let dinosaur of this.collectionOfDinos) {
      for (let diet in diets) {
        if (dinosaur.diet === diet) {
          diets[diet] += 1;
        };
      };
    };
    return diets;
  };


  // Park.prototype.numberOfDiet = function(){
  //  const dietTypeTotal = {'carnivore': 0, 'herbivore': 0}
  //  const dietTypes = Object.keys(dietTypeTotal)
  //  for (let dinosaur of this.collectionOfDinos){
  //    if (dietTypes.includes(dinosaur.diet)){
  //      dietTypeTotal[dinosaur.diet] += 1
  //    }
  //  }
  //  return dietTypeTotal
  // };



};








module.exports = Park;
