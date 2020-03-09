import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import axios from 'axios'
//import Cards from './Cards'
export default class Main extends Component {
    state={
        roomId:'',
        statechange:false
    }

    onsubmitJoinRoom= (e)=>{
        e.preventDefault()
       
          axios.post('http://localhost:4000/api/stories/joinRoom', { roomId:this.state.roomId })
          .then(res=>{
              console.log(res);
              console.log(res.data);
              this.props.history.push('/cards')

            })
            .catch(error =>{
                 alert('room not found')
            })

    }
    handleChange = event =>{
        this.setState({ roomId: event.target.value});
      }
    
        

    render() {
        
        return (

            <div className="card container" style={{ width: '40rem', position: 'relative', marginTop: '10%' }}>
                 {/* {(!this.state.statechange) ? <Main /> : <Cards />} */}
                <div className="card-header row">
                    <h3> Enter the scrum poker room</h3>
                </div>
                <div className="card-body row">
                    <form style={{width:"100%"}} onSubmit={this.onsubmitJoinRoom}>
                        <table style={{width:'100%'}}>
                            <tbody>
                            <tr>
                                <td style={{width: '1px', whiteSpace: 'nowrap', marginRight:'10px'}}><label htmlFor="room_label">Room (*)</label></td>
                                <td><input type="text" id="room" required style={{width:"100%"}} placeholder='Room id to access' onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td style={{width: '1px', whiteSpace: 'nowrap', marginRight:'10px'}}><label htmlFor="username2">Name (*)</label></td>
                                <td><input type="text" id="username2" required style={{width:"100%"}} placeholder='Your Name'/></td>
                            </tr>
                            <tr>
                                <td>
                                   {/*  <Link to='/cards'> */}
                                        <button type='submit' className='btn btn-info' style={{ float: 'right',marginTop:'20px'}}> ENTER </button>
                                    {/* </Link> */}
                                </td>

                            </tr>
                            </tbody>
                        </table>

                    </form>
                </div>
            </div>
        )
    }
}
