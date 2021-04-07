const message = 'Listen to your message for today!'
console.log(message.toUpperCase())

messages = {
    star: ['Angel', "Devil", "Vampire", "Lycan", "Warrior", "Banshee"],
    luck: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"],
    direction: ["peace", "joy", "indifference", "love", "confidence", "power"]
}

generateRandomN = (num) => {
    return Math.floor(Math.random() * num)
}

let finalMessage = []

for (let mes in messages) {
    let index = generateRandomN(messages[mes].length)

    switch(mes) {
        case 'star':
            finalMessage.push(`You have the star of a magnificent ${messages[mes][index]}.`)
            break;
        case 'luck':
            finalMessage.push(`Today, you're blessed with ${messages[mes][index]} luck.`)
            break;
        case 'direction':
            finalMessage.push(`Your direction lies in ${messages[mes][index]}.`)
            break;
        default:
            break;
    }
}

console.log(finalMessage.join('\n'))
