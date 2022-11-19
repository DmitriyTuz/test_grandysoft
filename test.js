
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let gender

let n
let arrName = ['John', 'Steve', 'Ann', 'Julia']

for (let i = 0; i < 10; i++) {
    n = getRandomArbitrary(0, 3)
    console.log('n = ', n)
    if (['John', 'Steve'].includes(arrName[n])) {
        gender = 'male' } else gender = 'female'

    await userA.create({first_name: arrName[n], gender: gender})
    await userB.create({first_name: arrName[n], gender: gender})
}