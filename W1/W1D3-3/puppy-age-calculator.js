const calculateDogAge = function (age) {
    dogYears = age * 7;
    console.log("Your dog is " + dogYears + " years old in dog years!");
    age = dogYears / 7;
    console.log("your age is" + ' ' + age)
}
calculateDogAge(10);
calculateDogAge(2);
calculateDogAge(100);