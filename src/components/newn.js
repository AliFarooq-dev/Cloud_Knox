import './card.css'

import React from 'react'

const newNAv = () => {
  return (
    <div>
        <header>
            <nav>
                <h1 id='logo'>Cloud Notes</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Partners</li>
                </ul>
                <div className='clear' ></div>
            </nav>
        </header>
    </div>
  )
}

export default newNAv