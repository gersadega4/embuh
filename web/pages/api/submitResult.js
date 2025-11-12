import crypto from 'crypto';
import { ethers } from 'ethers';
import axios from 'axios';


export default async function handler(req, res) {
if (req.method !== 'POST') return res.status(405).send('Method not allowed');


const { payload, signature } = req.body;
const msg = JSON.stringify(payload);
const recovered = ethers.verifyMessage(msg, signature);


// simple verify
if (!recovered || recovered !== payload.workerId) {
return res.status(400).json({ error: 'Invalid signature' });
}


// hash payload
const hash = crypto.createHash('sha256').update(msg).digest('hex');


// simulate writing hash to Irys (use axios to hit Irys testnet API later)
const tx = { id: hash, owner: recovered, timestamp: payload.timestamp };


console.log('Stored result', tx);


return res.status(200).json({ ok: true, tx });
}
