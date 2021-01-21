import React, {useState} from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid';
import Recipe from './components/recipe';
import './App.css'
import video from './assests/video-1.mp4'

const App = () => {
    const [query, setQuery] = useState("");
    const [recipe, setRecipe] = useState([]);

    const API_ID = "4fae879f";
    const API_KEY = "27768c2fe5146e8ed64776a7e820bb40"	
    const apiurl = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`

    const fetchApi = async()=>{
        const result = await axios.get(apiurl)
        // console.log(result)
        setQuery("")
        setRecipe(result.data.hits)
    }
    const onChange = e =>{
        setQuery(e.target.value)
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        fetchApi()
    }
    return (
        <div className="App">
            <h1>Receipe Anytime</h1>
            <video src={video}  height="500" autoPlay loop muted/>
            <div className="app-cont">
            <form className="search-form" onSubmit={onSubmit}>
                <input type="text" placeholder="type chicken, steak, pizza ..." autoComplete="off"
                 onChange={onChange} value={query} />
                <input type="submit" value="search" />
            </form>
            <div className="recipe-items">
            {recipe!== [] && recipe.map(recipe=><Recipe key={uuidv4()} recipe={recipe} />)}
            </div>
            </div>
        </div>
    )
}

export default App
