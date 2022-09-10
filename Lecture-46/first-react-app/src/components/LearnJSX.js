import React from 'react'

const LearnJSX = () => {

    const randomNumber = Math.floor(Math.random() * 10 + 1);

    const luckyNum = 7;

    const isLogin = Boolean(Math.floor(Math.random() * 2));    

    console.log(isLogin);

    let element = null;

    if (randomNumber % 2 === 0) {
        element=<p>Number is even</p>
    } else {
        element=<p>Number is odd ☹️</p>
    }

    const styles = {
        backgroundColor: 'black',
        color: 'white',
        padding: '16px'
    }

    return (
        <div>
            {isLogin && <section style={styles}>This is a secret section and is accessed while u are logged in</section>}
            <h1>This is some random h1 {Math.floor(Math.random()*6+1)} </h1>
            <h2>My Random Number b/w 1 to 10 is : {randomNumber}</h2>
            {randomNumber === luckyNum ?
                <img src="https://media1.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=6c09b952246396684e6d4a714ec02a05b070177d7949c85c&rid=giphy.gif&ct=g" /> 
                : <p>Not a lucky number 😢😢😢😢😢</p>}
            {element}
        </div>
    )
}

export default LearnJSX;