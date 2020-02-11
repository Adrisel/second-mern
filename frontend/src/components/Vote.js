import React, { Component } from 'react'
import logo from '../../src/user.png'

export default class Vote extends Component {
    render() {

         ///DEFINING STYLES
       const buttonStyle={
        padding:"83px 32px ",
        float:"right",
        borderStyle:"solid",
        borderColor:"#428bca",
        borderRadius:'25px',
        textAlign:'center'
    
       };

       const imageStyle={
           borderStyle:"solid",
           borderColor:"#428bca",
           borderRadius:'25px'
       }

       const centervertical={
           position:'absolute',
           top:"50%"
       }
        return (
            <div>
            <div className='container' style={{position:'relative', marginTop:'1%'}}>
                <div className='card'>
                <div className='card-header'>
                <h1 id='storyTitle'>STORY TITLE: PATIENCE HISTORY</h1>
                </div>
                <div className='card-body'>
                <p id='storyDescription'>This Story User is about how to build a history user for this we need to know 
                date of appointment, with treatment doctor did into patience, which kind of material did the doctor used, 
                and what will do the next appointment. Once you save this information It should list all the treatments 
                the doctor has done.  </p>
                </div>
                </div>
                <div className='container row' style={{marginTop:'20px'}}>
                    <div className="col-sm">
                      <button type="button" className="btn btn-outline-info" style={centervertical}>VIEW TEAM RESULTS</button>
                    </div>
                    <div className="col-sm">
                        <div className="row">
                            <div className="col-sm">
                             <h3 style={buttonStyle}>VALUE</h3>
                        </div>
                        <div className="col-sm">
                        <img src={logo} alt="react logo" style={imageStyle}/>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
                
            </div>

        )
    }
}
