import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response})
    })
  };

  render() {
    if (!this.state.customerDetails)
      return (<p>Loading Data</p>)
    return (<div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.customerDetails.data.name}</Panel.Title>
          <Panel.Title componentClass="h3">Data scientist of United Health</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          {/* <p>Name : {this.state.customerDetails.data.name}</p>
          <p>Email : {this.state.customerDetails.data.email}</p>
          <p>Phone : {this.state.customerDetails.data.phone}</p>
          <p>City : {this.state.customerDetails.data.city}</p>
          <p>State : {this.state.customerDetails.data.state}</p>
          <p>Country : {this.state.customerDetails.data.country}</p>
          <p>Organization : {this.state.customerDetails.data.organization}</p>
          <p>Job Profile : {this.state.customerDetails.data.jobProfile}</p>
          <p>Additional Info : {this.state.customerDetails.data.additionalInfo}</p> */}
          <p style={{size:30}}>Address: Room D504, Bethlehem Baptist Church North Campus,</p>
          <p style={{size:30}}>5151 Program Ave
Mounds View, Minnesota 55112</p>
<p ><center>Time:  7 pm to 8 pm, Nov 6(Wednesday)</center></p>
          <p style={{color: "red",fontSize:40}}>What is the nature of quantum interference?</p>
        
          <br />
          <div>
          <p style={{textAlign:"justify"}}>   
          
          {'   '} Quantum mechanics is a fundamental base of modern physics as well as many sectors of modern science. Despite its tremendous success during the past century, there is no consensus among physicists on how to understand quantum mechanics. The double-slit problem and delayed choice quantum eraser, etc, causes much philosophical discussion. This Wednesday we’ll continue our discussion of this topic and share different historical interpretations that have been provided for how to understand the wave/particle behavior that light exhibits under varying conditions. We’ll also share thoughts regarding some recent experiments (touched upon briefly last time) and what implications they may have on this topic.
            </p>
            </div>
           
           
            <br />
            <p style={{color: "red",fontSize:40}}>All are Welcome!</p>
      
          </Panel.Body>
      </Panel>

      
    </div>)
  }
}
