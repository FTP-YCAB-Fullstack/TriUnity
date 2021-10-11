import React from 'react'

function Header() {
    return (
        <div>
            <header>
                <h1>Sell ​​photos without worrying about plagiarism</h1>
                <form>
                    <input type="text" placeholder="Search Photo here..."/> 
                    <input type="submit" value="Search"/>
                </form>
                <button>Sell your Photo</button>
            </header>
        </div>
    )
}

export default Header