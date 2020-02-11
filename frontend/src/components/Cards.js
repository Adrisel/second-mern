import React, { Component } from 'react'


export default class Cards extends Component {
    render() {
       ///DEFINING STYLES
       const buttonStyle={
        fontSize: "24px",
        padding: "32px 16px"
       };

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
            </div>
            <div className='container' style={{position:'relative', marginTop:'10px'}}>
                <div className='row'>
                    <div className='col-sm'>
                      <button type='button' className='btn btn-info btn-block' style={buttonStyle}>0</button>
                    </div>
                    <div className='col-sm'>
                    <button type="button" className='btn btn-info btn-block' style={buttonStyle}>1/2</button>
                    </div>
                    <div className='col-sm'>
                    <button type='button' className='btn btn-info btn-block' style={buttonStyle}>1</button>

                    </div>
                    <div className='col-sm'>
                    <button type="button" className="btn btn-info btn-block" style={buttonStyle}>2</button>
                    </div>
                    <div className='col-sm'>
                    <button type='button' className='btn btn-info btn-block' style={buttonStyle}>3</button>
                    </div>
                    <div className='col-sm'>
                    <button type='button' className='btn btn-info btn-block' style={buttonStyle}>5</button>
                    </div>

                </div>
                <div className='form-group row' style={{marginTop:'5px'}}>
                <div className='col-sm'>
                      <button type='button' className='btn btn-info btn-block' style={buttonStyle}>8</button>
                    </div>
                    <div className='col-sm'>
                    <button type="button" className='btn btn-info btn-block' style={buttonStyle}>13</button>
                    </div>
                    <div className='col-sm'>
                    <button type='button' className='btn btn-info btn-block' style={buttonStyle}>2</button>

                    </div>
                    <div className='col-sm'>
                    <button type="button" className="btn btn-info btn-block" style={buttonStyle}>40</button>
                    </div>
                    <div className='col-sm'>
                    <button type='button' className='btn btn-info btn-block' style={buttonStyle}>100</button>
                    </div>
                    <div className='col-sm'>
                    <button type='button' className='btn btn-info btn-block' style={buttonStyle}>?</button>
                    </div>

                </div>
                <button type="button" className="btn btn-outline-info" style={{float:'right', width:'150px'}}>VOTE</button>
            </div>
            </div>
        )
    }
}
