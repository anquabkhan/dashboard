import React from 'react';
import "../Styles/Practice_style.css"

const Practice= () => {
    const change = "master-1"
    return (
        <>
            <div>
                <p>This is the practice page for css</p>
                
            </div>
            <p id="quote">Fifa worldcup 22 is in which country?</p>
            <ul>
                <li><a className='country'>Kuwait</a></li>
                <li><a className='country'>Qatar</a></li>
                <li><a className='country'>Turkey</a></li>
            </ul>
            <div id='sec2'>
                <p>France won the worldcup in 2018 
                   <span id='player'>Luka modric</span> was awarded player of the tounrametn 
                    whereas <span id='player'>Mbappe </span>got the emerging player award.
                </p>
            </div>
            <div id= "goat"style={{backgroundColor: "green"}}>
                <p >Messi vs <span id='goat1'>Ronaldo</span> ? whom do you support ?</p>
                <p ><span id='goat2'>Messi</span> vs Ronaldo ? whom do you support ?</p>

            </div>
        </>
        
    )
}

export default Practice;
