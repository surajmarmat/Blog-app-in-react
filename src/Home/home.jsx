import React, { useState } from 'react'
import Header from './header'
import BlogTiles from './BlogTiles'
import AddBlog from './addBlog'
import './style.css'

var id = localStorage.getItem('id2')
var blogId = localStorage.getItem('tempID')
var delId = localStorage.getItem('delete')

var array = [];


for (let j = 0; j < id; j++) {
    if (localStorage.getItem('delete'+j) == "true") {
        continue;
    }
    else{
        for (let i = 0; i < 1; i++) {
            var ele = <BlogTiles title={localStorage.getItem('title' + j)} desc={localStorage.getItem('desc' + j)} autName={localStorage.getItem('autName' + j)}
                cat={localStorage.getItem('cat' + j)} date={localStorage.getItem('date')} idMain={j} />
            array.push(ele);
        }
    }
}

const Home = () => {

    let [modeStr, changeMode] = useState('Dark Mode');
    let [bgColor, changeBgColor] = useState('#222');

    var dpMode = () =>{
        if (modeStr == 'Dark Mode') {
            // document.body.style.background = '#121212'
            document.body.style.background = ' linear-gradient(to right top, #131315, #121215, #111114, #0f1014, #0e0f13)'
            changeMode('Light Mode') 
            changeBgColor('white');
        }
        else if(modeStr == 'Light Mode'){
            // document.body.style.background = '#fff'
            document.body.style.background = 'white'
            changeMode('Dark Mode')
            changeBgColor('#222'); 
        }
    }

    return (
        <div className="App" >
            <h1>
                <span>"</span>
                Your Blog
                <span>"</span>
            </h1>
            <p>
                Start Writing Your Blogs From This Moment.
            </p>
            <button id="displayMode" onClick={dpMode} style={{background : bgColor}} >
            </button>
            <div className="container" >
                <Header />
            </div>
            <div className="tiles">
                {array}
                <AddBlog />
            </div>
        </div>
    )
}

export default Home
