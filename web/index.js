import { useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';


export default function Home() {
const [wallet, setWallet] = useState(null);
const [status, setStatus] = useState('Idle');
const [mined, setMined] = useState(0);


async function connectWallet() {
if (!window.ethereum) return alert('Install MetaMask first');
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();
const addr = await signer.getAddress();
setWallet({ signer, addr });
}


async function startMining() {
if (!wallet) return alert('Connect wallet first');
setStatus('Mining...');


const payload = {
workerId: wallet.addr,
nonce: Math.floor(Math.random() * 1e6),
timestamp: Date.now(),
};


const signature = await wallet.signer.signMessage(JSON.stringify(payload));
await axios.post('/api/submitResult', { payload, signature });


setMined((m) => m + 1);
setStatus('Idle');
}


return (
<main style={{ textAlign: 'center', marginTop: '5rem' }}>
<h1>CYSIC x IRYS Mining Game</h1>
<p>Simulasi mining hardware Cysic, data disimpan di Irys</p>
{wallet ? (
<>
<p>Connected: {wallet.addr}</p>
<button onClick={startMining}>Start Mining</button>
<p>Status: {status}</p>
<p>Mined blocks: {mined}</p>
</>
) : (
<button onClick={connectWallet}>Connect Wallet</button>
)}
</main>
);
}
