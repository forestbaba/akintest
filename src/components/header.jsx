import React,{useEffect, useState} from 'react'
import Icon1 from '../assets/images/facebook.png'
import Arrow from '../assets/images/arrow-down.svg'
import SelectItem from './SelectItem'
import axios from 'axios';


const Header =()=> {

    const [res, setRes] = useState([])

    useEffect(() =>{
        axios.get('https://api.jikan.moe/v3/anime/1/characters_staff')
        .then(response =>{
            setRes(response.data.characters)
        }).catch(err =>{
            console.log("ERR: ", err)
        })
    },[])
    return (
        <div className="parent">

        <div className="parent-child">
        <SelectItem res={res}/>
            <div className="menu-item">
                <p>You</p>
                <p>Your Team</p>
                <p className="active">Admin</p>
            </div>
           <SelectItem res={res} name={"KIM"}/>
        </div>
        </div>

    )
}
export default Header;