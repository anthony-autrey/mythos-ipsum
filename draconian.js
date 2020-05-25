const MythosIpsum = require('./draconian-language');

const nameCount = 20
const wordCount = 10

console.log('\nRandom Names: ----------------\n')
for (let i = 0; i < nameCount; i++) {
    console.log(`${MythosIpsum.getRandomName(-.7)} ${MythosIpsum.getRandomName(-.5)}`)
}

console.log('\nWords: ----------------\n')
for (let i = 0; i < wordCount; i++) {
    console.log(`${MythosIpsum.getRandomName()}`)
}

console.log('\nSentence: ----------------\n')
console.log(`${MythosIpsum.getRandomSentence()}`)

console.log('\nParagraph: ----------------\n')
console.log(`${MythosIpsum.getRandomParagraph()}`)