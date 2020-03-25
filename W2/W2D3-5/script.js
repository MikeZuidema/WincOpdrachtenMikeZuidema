const superheroes = [
    { name: "Batman", publisher: "DC Comics", alter_ego: "Bruce Wayne", first_appearance: "Detective Comics #27", weight: 210 },
    { name: "Superman", publisher: "DC Comics", alter_ego: "Kal-El", first_appearance: "Action Comics #1", weight: 220 },
    { name: "Flash", publisher: "DC Comics", alter_ego: "Jay Garrick", first_appearance: "Flash Comics #1", weight: 195 },
    { name: "Green Lantern", publisher: "DC Comics", alter_ego: "Alan Scott", first_appearance: "All-American Comics #16", weight: 186 },
    { name: "Green Arrow", publisher: "DC Comics", alter_ego: "Oliver Queen", first_appearance: "All-American Comics #16", weight: 195 },
    { name: "Wonder Woman", publisher: "DC Comics", alter_ego: "Princess Diana", first_appearance: "The Incredible Hulk #180", weight: 165 },
    { name: "Blue Beetle", publisher: "DC Comics", alter_ego: "Dan Garret", first_appearance: "Mystery Men Comics #1", weight: 145 },
    { name: "Spider Man", publisher: "Marvel Comics", alter_ego: "Peter Parker", first_appearance: "Amazing Fantasy #15", weight: 167 },
    { name: "Captain America", publisher: "Marvel Comics", alter_ego: "Steve Rogers", first_appearance: "Captain America Comics #1", weight: 220 },
    { name: "Iron Man", publisher: "Marvel Comics", alter_ego: "Tony Stark", first_appearance: "Tales of Suspense #39", weight: 250, },
    { name: "Thor", publisher: "Marvel Comics", alter_ego: "Thor Odinson", first_appearance: "Journey into Myster #83", weight: 200 },
    { name: "Hulk", publisher: "Marvel Comics", alter_ego: "Bruce Banner", first_appearance: "The Incredible Hulk #1", weight: 1400 },
    { name: "Wolverine", publisher: "Marvel Comics", alter_ego: "James Howlett", first_appearance: "The Incredible Hulk #180", weight: 200 },
    { name: "Daredevil", publisher: "Marvel Comics", alter_ego: "Matthew Michael Murdock", first_appearance: "Daredevil #1", weight: 200 },
    { name: "Silver Surfer", publisher: "Marvel Comics", alter_ego: "Norrin Radd", first_appearance: "The Fantastic Four #48", weight: 0 }
]

//1
const superNames = superheroes.map(function (superheroes) {
    return superheroes.name
});

console.log(superNames)

//2

const lightHeroes = superheroes.filter(function (light) {
    if (light.weight <= 190) {
        return superheroes
    }
})
console.log(lightHeroes)

//3

const heavyHeroes = superheroes.filter(function (light) {
    if (light.weight === 200) {
        return superheroes
    }
})
const heavyHeroesMap = heavyHeroes.map(function (heavyHeroes) {
    return heavyHeroes.name
})

console.log(heavyHeroesMap);

//4

const firstAppearance = superheroes.map(function (appearance) {
    return appearance.first_appearance
});
console.log(firstAppearance);

//5

const dcHeroes = superheroes.filter(function (company) {
    if (company.publisher === "DC Comics") {
        return superheroes
    }
});
console.log(dcHeroes)

//6
const dcHeroesList = superheroes.filter(function (company) {
    if (company.publisher === "DC Comics") {
        return superheroes
    }
});
const allWeights = dcHeroesList.map(function (heroeWeight) {
    return heroeWeight.weight
});
const weightSum = allWeights.reduce(function (total, weight) {
    return total + weight;
}, 0)

console.log(weightSum)

//7

const marvelList = superheroes.filter(function (company) {
    if (company.publisher === "Marvel Comics") {
        return superheroes
    }
});
const allWeightsMarvel = marvelList.map(function (heroeWeight) {
    return heroeWeight.weight
});
const weightSumMarvel = allWeightsMarvel.reduce(function (total, weight) {
    return total + weight;
}, 0)

console.log(weightSumMarvel)

//8

const heaviestHeroes = superheroes.filter(function (light) {
    if (light.weight >= 1000) {
        return superheroes
    }
})
console.log(heaviestHeroes)