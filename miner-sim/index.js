import axios from 'axios';
import crypto from 'crypto';


const workerId = 'local-miner-001';


async function mineOnce() {
const payload = {
workerId,
nonce: Math.floor(Math.random() * 1e6),
timestamp: Date.now(),
};


const msg = JSON.stringify(payload);
const signature = crypto.createHash('sha256').update(msg).digest('hex'); // placeholder


await axios.post('http://localhost:3000/api/submitResult', { payload, signature });
console.log('Sent mining result', payload);
}


mineOnce();
