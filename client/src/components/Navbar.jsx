import React from 'react'
import AssetLogo from '../assets/logo.png'

function Navbar(props) {
    return (
        <nav>
            <div className="flex justify-between gap-5 py-2 px-4 items-center bg-red-600">
                <img src={AssetLogo} alt="logo" onClick={props.onClicktoHome}/>
                <div >
                <button onClick={props.onClicktoKeranjang} className="px-4 text-white">Keranjang</button>
                <button onClick={props.onClicktoLogin} className="px-4 text-white">Login</button>
                <button onClick="class=far fa-user" className="px-4 text-white">Profile</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
