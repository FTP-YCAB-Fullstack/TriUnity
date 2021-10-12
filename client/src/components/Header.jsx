import React from 'react'

function Header(props) {
    return (
        <div>
            <header className="w-full h-screen bg-yellow-300 flex flex-col justify-center items-center">
                <h1 className="text-4xl text-center w-2/5">Sell ​​photos without worrying about plagiarism</h1>
                <form className="flex bg-white rounded-full w-1/2 justify-between my-10">
                    <input type="text" className="rounded-l-full py-2 pl-4" placeholder="Search Photo here..."/> 
                    <input type="submit" className="rounded-full py-2 px-7" value="Search"/>
                </form>
                <button onClick={props.onClicktoSellPhotos} className="bg-red-600 px-5 py-2 rounded-full text-white">Sell your Photos</button>
            </header>
        </div>
    )
}

export default Header