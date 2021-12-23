import React from 'react'
import { useState } from 'react'
import './blog.css'

var blogID = localStorage.getItem('tempID');
let path = 'https://source.unsplash.com/1430x350/?/';

const BlogPage = () => {

    const color = 'white'
    const [prev, current] = useState(color);

    const deleted = (event) => {
        localStorage.setItem('delete' + blogID, "true");
    }

    return (
        <div className="blogMain" style={{ backgroundColor: prev }} >
            {/* This is the Blog Page. {blogID} */}
            <div className="boxOne">
                <div className="titleBlog">
                    {localStorage.getItem('title' + blogID)}
                </div>
                <div className="catBlog">
                    {localStorage.getItem('cat' + blogID)}
                </div>
            </div>
            <div className="btnBox1">
                <div className="btns">
                    <a href="/">
                        <i onClick={deleted} class="far fa-trash-alt fa-lg"></i>
                    </a>
                    {/* <i class="far fa-edit fa-lg"></i> */}
                    <a href="/">
                        <i class="fas fa-home fa-2x"></i>
                    </a>
                </div>
            </div>
            <div className="imageBlog">
                <img src={path + localStorage.getItem('cat' + blogID)} alt="" />
                <div className="descBlog">
                    {localStorage.getItem('desc' + blogID)}
                </div>
            </div>
            <div className="autNameBlog">
                {localStorage.getItem('autName' + blogID)}
                <br />
                {localStorage.getItem('date')}
            </div>
            <footer>

            </footer>
        </div>
    )
}

export default BlogPage
