import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendAirdropToUser() {
        const Amount = document.getElementById("publicKey").value;
        await connection.requestAirdrop(wallet.publicKey, Amount * 1000000000)
        alert("airdropped sol")
    }

    return (
        <div>
            <input id='publicKey' type='text' placeholder='Amount'></input>
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    )

}