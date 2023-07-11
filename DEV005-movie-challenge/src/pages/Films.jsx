import React from 'react'
import { Footer} from '../component/Footer'
import { Navbar } from '../component/Navbar';
import { Film } from '../component/Caratulas';

export const Films= ()=>{
    return(
        <React.Fragment>
              <Navbar />
              <Film />
              <Footer />
            </React.Fragment>
          );
}