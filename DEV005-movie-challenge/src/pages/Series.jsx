import React from 'react'
import { Footer} from '../component/Footer'
import { Navbar } from '../component/Navbar';
import { Search } from '../component/Search';
import { Film } from '../component/Movies';


export const Series= ()=>{
    return(
        <React.Fragment>
              <Navbar />
              <Search />
              <Film contentType='tv/popular?'/>
              <Footer />
            </React.Fragment>
    )
}
