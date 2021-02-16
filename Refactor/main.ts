import { Proof } from "./proofOfConcept";
import { Human } from "./languageConfigs/human";

let inputText = `
    The groceries should be arriving soon.
    My name is Tony, and my wife's name is tara.
`;

console.log(Proof.getTranslation("spanish", inputText));

// for (let i = 0; i < 10; i++) {
//   console.log(Proof.getFirstName() + " " + Proof.getLastName());
// }

// console.log(JSON.stringify(Human))
