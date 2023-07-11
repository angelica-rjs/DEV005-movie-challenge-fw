import React from 'react'
import { Footer} from '../component/Footer'
import { Navbar } from '../component/Navbar';
import { Search } from '../component/Search';
import { Seriess } from '../component/Seriess';


export const Series= ()=>{
    return(
        <React.Fragment>
              <Navbar />
              <Search/>
              <Seriess />
              <Footer />
            </React.Fragment>
    )
}