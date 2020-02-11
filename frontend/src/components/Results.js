import React, { Component } from 'react'

export default class Results extends Component {
    render() {
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
                <div className="card-footer">RESULTS</div>
                </div>
            </div>
            </div>
        )
    }
}
