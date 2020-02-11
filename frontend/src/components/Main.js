import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Main extends Component {

    render() {
        
        return (

            <div className="card container" style={{ width: '40rem', position: 'relative', marginTop: '10%' }}>
                <div className="card-header row">
                    <h3> Enter the scrum poker room</h3>
                </div>
                <div className="card-body row">
                    <form style={{width:"100%"}}>
                        <table style={{width:'100%'}}>
                            <tr>
                                <td style={{width: '1px', whiteSpace: 'nowrap', marginRight:'10px'}}><label for="room_label">Room (*)</label></td>
                                <td><input type="text" id="room" required style={{width:"100%"}} placeholder='Room id to access'/></td>
                            </tr>
                            <tr>
                                <td style={{width: '1px', whiteSpace: 'nowrap', marginRight:'10px'}}><label for="username2">Name (*)</label></td>
                                <td><input type="text" id="username2" required style={{width:"100%"}} placeholder='Your Name'/></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to='/cards'>
                                        <button type='button' className='btn btn-info' style={{ float: 'right',marginTop:'20px'}}> ENTER </button>
                                    </Link>
                                </td>

                            </tr>
                        </table>

                    </form>
                </div>
            </div>
        )
    }
}
