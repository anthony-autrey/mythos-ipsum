const MythosIpsum = require('./mythos-ipsum');

const nameCount = 10

console.log('\nRandom Names: ----------------\n')
for (let i = 0; i < nameCount; i++) {
    console.log(`${MythosIpsum.getRandomName()} ${MythosIpsum.getRandomName()}`)
}

console.log('\nSentence: ----------------\n')
console.log(`${MythosIpsum.getRandomSentence()}`)

console.log('\nParagraph: ----------------\n')
console.log(`${MythosIpsum.getRandomParagraph()}`)

console.log('\nUUID: ----------------\n')
console.log(`${MythosIpsum.getRandomUUID()}`)