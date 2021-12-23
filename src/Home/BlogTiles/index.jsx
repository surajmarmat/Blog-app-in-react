import React from 'react'
import './blogTiles.css'
var id = localStorage.getItem('id')
let path = 'https://source.unsplash.com/350x200/?/';
let path2 = 'https://source.unsplash.com/50x50/?face';

var path3 = localStorage.getItem('imgFile' + id)
// let path3Url = URL.createObjectURL(path3)

const BlogTimes = (props) => {
    console.log(path3)
    // console.log(path3Url)
    const visitClicked = (event) => {
        var tempID = props.idMain;
        // event.preventDefault();
        localStorage.setItem('tempID', tempID)
        console.log(tempID)
    }
    return (
        <div>
            <div className="tile" idMain={props.idMain} >
                <img id="imgMain" src={path + "?" + props.cat} alt="image here" />

                <label className="categoryTile">
                    {props.cat}
                </label>
                <h3 className="titleTile">
                    {props.title}
                </h3>
                <p className="desc">
                    {props.desc}
                </p>
                <div className="authorDetails">
                    <img id="autImg" src={path2} alt="author image" />
                    <div className="nameDate">
                        <span className="nameAut">
                            {props.autName}
                        </span>
                        <br />
                        <span className="date">
                            {props.date}
                        </span>
                    </div>
                </div>
                <div className="visit">
                    <a href="/blog">
                        <i onClick={visitClicked} className="fas fa-arrow-right fa-lg"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BlogTimes
