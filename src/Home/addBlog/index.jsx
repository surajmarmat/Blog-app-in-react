import './style.css'
import React from 'react'
import { useState } from 'react'
import BT from "../BlogTiles"

var id = localStorage.getItem('id');

if (id == null) {
    console.log(id)
    localStorage.setItem('id', 0);
    id = localStorage.getItem('id');
}

localStorage.setItem('id2', id)

var titles = []
var cat = []
var desc = []
var autName = []

const AddBlog = () => {
    const [body, setBody] = useState("");

    const DP_N = "none"
    const DP_None = "none"
    const [DP, ChangeDP] = useState(DP_N)

    const [None, ChangeNone] = useState(DP_None)
    function canClicked(event) {
        if (DP == "none") {
            let newDP = "flex";
            ChangeDP(newDP);
        }
        else {
            let newDP = "none";
            ChangeDP(newDP);
        }
    }

    const catchTextTitle = (event) => {
        localStorage.setItem('title' + id, event.target.value)
        titles[id] = localStorage.getItem('title' + id);
    }
    const catchTextCat = (event) => {
        localStorage.setItem('cat' + id, event.target.value)
        cat[id] = localStorage.getItem('cat' + id);
    }
    const catchTextAN = (event) => {
        localStorage.setItem('autName' + id, event.target.value)
        autName[id] = localStorage.getItem('autName' + id);
    }
    const catchTextDesc = (event) => {
        localStorage.setItem('desc' + id, event.target.value)
        desc[id] = localStorage.getItem('desc' + id);
    }
    const submitForm = (event) => {
        var delId = localStorage.getItem('delete' + id)
        if (delId == "true") {
            localStorage.setItem('delete' + id, "false")
        }
        id++;
        localStorage.setItem('id', id)
        var d = new Date;
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var date = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
        localStorage.setItem('date', ' ')

        if (localStorage.getItem('date') == " ") {
            localStorage.setItem('date', date);
        }

    }

    // const fileFound = (event) => {
    //     var file = event.target.files[0];
    //     var reader = new FileReader();
    //     var url = reader.readAsDataURL(file);

    //     reader.onloadend = function (e) {
    //         console.log("From fileFound here")
    //         newImgSrc(reader.result);
    //         changeInputDisplay("none")
    //         changeImgDisplay("block");
    //     }.bind(this);
    //     console.log("From fileFound here")
    //     console.log(url)

    //     localStorage.setItem('imgUrl', url);
    // }



    return (
        <div>
            <div className="addBlog">
                <div id="btnBox" >
                    <i className="far fa-plus-square fa-8x" onClick={canClicked}></i>
                </div>
                <div style={{ display: DP }} className="box">
                    <i id='cancelBtn' className="far fa-times-circle fa-lg" onClick={canClicked}></i>
                    <form >
                        <div className="partOne" >
                            <input type="text" placeholder="Title" onChange={catchTextTitle} />
                            <input type="text" placeholder="Category" onChange={catchTextCat} />
                            <input type="text" placeholder="Author Name" onChange={catchTextAN} id="AutName" />
                            <br />
                            <button onClick={submitForm} >
                                +
                            </button>
                        </div>
                        <div>
                            <textarea name="" placeholder="Write Your Blog Here..." id="desc" cols="30" rows="5" onChange={catchTextDesc} ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default AddBlog
