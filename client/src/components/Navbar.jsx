import React from 'react'
import { useCookies } from "react-cookie";
import AssetLogo from '../assets/logo.png'
import Keranjang from '../assets/keranjang.png'

function Navbar(props) {
    const [ cookies ] = useCookies(["token"])
    return (
        <nav>
            <div className="flex justify-between gap-5 py-2 px-4 items-center bg-red-600">
                <img src={AssetLogo} alt="logo" onClick={props.onClicktoHome}/>
                <div className="flex flex-row gap-2">
                <img src={Keranjang} alt="Masukkan kedalam keranjang" className="cursor-pointer" onClick={props.onClicktoKeranjang}/>
                {/* <button  className="px-4 text-white">Keranjang</button> */}
                {cookies.token ? <button onClick={props.onClickLogout} className="px-4 text-white">Logout</button> : <button onClick={props.onClicktoLogin} className="px-4 text-white">Login</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
