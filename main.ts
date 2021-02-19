import { MythosIpsum } from "./MythosIpsum";
import { Human } from "./languageConfigs/human";

const ipsum = new MythosIpsum(Human);
const inputText = `
    The quick brown fox jumps over the lazy dog.
    Mythos Ipsum was created by a rad guy.`;

console.log("Names:\n");
for (let i = 0; i < 5; i++) {
  console.log(`    ${ipsum.getFirstName()} ${ipsum.getLastName()}`);
}
console.log("\nTranslation:");
console.log(inputText);
console.log(ipsum.getTranslation("English", inputText));
console.log("");
