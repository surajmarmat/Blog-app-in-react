import React from 'react'
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
            <div className="container">
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
