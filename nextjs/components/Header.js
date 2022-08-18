import { Button, ConnectButton } from "web3uikit"

// ud
import UAuth from "@uauth/js"

const uauth = new UAuth({
    clientID: "fd8290ec-5042-4ced-8bf5-baf16ee3e95b",
    redirectUri: "https://lottery-giggling-ginger.vercel.app/",
})

const login = async () => {
    try {
        const authorization = await uauth.loginWithPopup()
        console.log(authorization)
    } catch (error) {
        console.error(error)
    }
}

const logout = async () => {
    await uauth.logout()
    console.log("Logged out with Unstoppable")
}

// Save provider in state

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row">
            <h1 className="py-4 px-4 font-bold text-3xl"> Decentralized Lottery</h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false} />
            </div>
            <div className="ml-auto py-2 px-4">
                <p>zzz</p>
                <button onClick={login}>Login with Unstoppable</button>
                <button onClick={logout}>Logout Unstoppable</button>
            </div>
        </nav>
    )
}
