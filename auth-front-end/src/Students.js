import React, {Component} from 'react';
import axios from 'axios';

export default class Students extends Component{
    constructor(){
        super()
        this.state = {
          students: []
        }
        
      }

      componentDidMount(){
          axios.get('/students').then(res => {
              this.setState({
                  students: res.data
              })
          })
      }


    render(){
        var mappedStudents = this.state.students.map((e, i) => {
            return(
              <div key = {i}>
                  <h1>{e.student}</h1>
                  <h2>Email: {e.email_address}</h2>
                  <h2>Phone: {e.phone}</h2>
                  <h2>Current Grade: {e.current_grade}</h2>
              </div>
            )
          })
      
        return(
            <div>
            {mappedStudents}
        </div>
        )
        
    }
}