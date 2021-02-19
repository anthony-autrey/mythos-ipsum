const MythosIpsum = require('./elven-language');

const nameCount = 10

console.log('\nRandom Names: ----------------\n')
for (let i = 0; i < nameCount; i++) {
    console.log(`${MythosIpsum.getRandomName(.1)} ${MythosIpsum.getRandomName(.5)}`)
}

console.log('\nSentence: ----------------\n')
console.log(`${MythosIpsum.getRandomSentence()}`)

console.log('\nParagraph: ----------------\n')
console.log(`${MythosIpsum.getRandomParagraph()}`)

console.log('\nUUID: ----------------\n')
console.log(`${MythosIpsum.getRandomUUID()}`)