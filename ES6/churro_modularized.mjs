console.log('antes de importar');

import { addTwo, addThree } from './add_module.mjs'
import * as add from './add_module.mjs'
import sumaDos from './add_module.mjs'
import { addTwo as banana } from './add_module.mjs'

console.log(`Si sumo 2 a 3 me da ${addTwo(3)}`);
console.log(`Si sumo 3 a 4 me da ${addThree(4)}`);

console.log(`Si sumo 2 a 3 me da ${add.addTwo(3)}`);
console.log(`Si sumo 3 a 4 me da ${add.addThree(4)}`);

console.log(`Si sumo 2 a 2 me da ${sumaDos(2)}`);
console.log(`Si sumo 2 a 2 me da ${banana(2)}`);
