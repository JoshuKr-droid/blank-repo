import os from 'os';
import { bytesToSize } from './FreeMemory.mjs';

console.log('Operating System Information');
console.log('----------------------------');

console.log('Operating System:', os.type());
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Release:', os.release());
console.log('Hostname:', os.hostname());
console.log('Number of CPUs:', os.cpus().length);

console.log('Free Memory:', bytesToSize(os.freemem()));
console.log('Total Memory:', bytesToSize(os.totalmem()));