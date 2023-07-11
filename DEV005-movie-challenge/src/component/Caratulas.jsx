import React from 'react'
import { GetData } from '../data'

export const Film= ()=>{
   const film =  GetData('genre/movie/list?')
   .then((data)=>{
    console.log(data)
   })
    return(
        <div>
            <h1>aca deben ir las peliculas</h1>
            {/*films.array.forEach(film => {
                <div>
                    <img src={film.poster_path}/>
                </div>
            })
        */}   
        </div>
    )
}