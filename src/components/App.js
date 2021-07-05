import React  from 'react'
//import Like from './Like'
import Navigation from './navigation/navigation'
import Home from './Home'
import './navigation/navigation.css'
//import Button from './Button'


const App = () => { 

    return (
      <div className='container-fluid'>
        <div className='row  sticky'>
          <div className='col-sm-12'><Navigation /></div>
        </div>
        <div className='row'>
          <div className='col-sm-12'><Home /></div>
        </div>
        {/* <div className='row'> 
          <div className='col-sm-2'></div>   
          <div className='col-md-4 col-sm-12'><Like post={"hi"} />  </div>
          <div className='col-md-4 col-sm-12'><Like post={"hio"} />  </div>
        </div> */}
      </div>
    );
}

export default App;
