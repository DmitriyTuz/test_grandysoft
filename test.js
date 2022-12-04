
// function getRandomArbitrary(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }
//
// let gender
//
// let n
// let arrName = ['John', 'Steve', 'Ann', 'Julia']
//
// for (let i = 0; i < 10; i++) {
//     n = getRandomArbitrary(0, 3)
//     console.log('n = ', n)
//     if (['John', 'Steve'].includes(arrName[n])) {
//         gender = 'male' } else gender = 'female'
//
//     await userA.create({first_name: arrName[n], gender: gender})
//     await userB.create({first_name: arrName[n], gender: gender})
// }

// const regexp = /Игорь\./
// const str = 'Меня зовут Игорь. Мне 25 лет.'

// const regexp = /\d\d/
// const str = 'Меня зовут Игорь. Мне 25 лет. А тебе 24?'

// const regexp = /\D\D/
// const str = 'Меня зовут Игорь. Мне 25 лет. А тебе 24?'

// const regexp = /\s\d\d\s/
// const str = 'Меня зовут Игорь. Мне 25 лет. А тебе 24?'

// const regexp = /\s\D\D\s/
// const str = 'Меня зовут Игорь. Мне 25 лет. А те бе 24?'

// const regexp = /\s\w\w\s/
// const str = 'Меня зовут Игорь. Мне 25 лет. А тебе 24! Igor ?'

// const regexp = /\w\w\w\w/
// const str = 'Меня зовут Игорь. Мне 25 лет. А тебе 24! Igor ?'

// const regexp = /\w\w\w\w/
// const str = 'Меня зовут Игорь. Мне 25 лет. А тебе 24! Igor ?'

// const regexp = /\d{3,}/
// const str = 'Меня зовут Игорь 1000000000. Мне 2500 лет. А тебе 24! Igor ?'

// const regexp = /./g
// const str = 'ac!\nb'

// const regexp = /./gs
// const str = 'ac!\nb'

// const regexp = /кот/g
// const str = 'Кот терракотового цвета ест котлету'

// const regexp = /кот/gi
// const str = 'Кот терракотового цвета ест котлету'
//
// const result = str.match(regexp)
// console.log(result)

// const regexp = /кот/gi
// const str = 'Кот терракотового цвета ест котлету'
//
// let result = []
// let currentResult = null
// while (currentResult = regexp.exec(str)) {
//     // result = [...result, currentResult]
//     result.push(currentResult)
// }
//
// console.log(result)

// const str = ''
// for (let i = 0; i < 10000000; i++) {

// }

const {subscription} = require('./models/index')

let funct = async () => {
    let sub = await subscription.findAll({
        where: {
            userAId: 1,
            userBId: 2
        }
    })
    console.log('sub = ', sub[0])
    return sub
}

funct()