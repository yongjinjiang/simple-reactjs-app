import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import CustomerDetails from './CustomerDetails'
import axios from 'axios'

export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    axios.get('assets/samplejson/customerlist.json').then(response => {
      this.setState({customerList: response})
    })
  };

  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-1">
     
      
        {/* {

          this.state.customerList.data.map(customer => <Panel bsStyle="info" key={customer.name} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{customer.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>{customer.jobProfile}</p>
              <p>{customer.phone}</p>
              <Button bsStyle="info" onClick={() => this.setState({selectedCustomer: customer.id})}>

                Click to View Details

              </Button>

            </Panel.Body>
          </Panel>)
        } */}
      </div>
      <div className="col-md-6">
        <CustomerDetails val={this.state.selectedCustomer}/>
      </div>

      <div className="col-md-5">

      <br />
        <br /><br />
        <br /><br />
        <br />
      <p style={{color: "blue",fontSize:20,   position: "absolute",left: 60}}>Some videos to watch:</p>
   
        <br />
        <br />
        <ol style={{textAlign:"left"}}> 
            <li>  <a href="https://www.youtube.com/watch?v=U7Z_TIw9InA" target="_blank">Delayed Choice Quantum Eraser Explained</a> </li>
            <li>  <a href="https://www.youtube.com/watch?v=p-MNSLsjjdo" target="_blank">The Quantum Experiment that Broke Reality</a> </li>
            <li>  <a href="https://www.youtube.com/watch?v=8ORLN_KwAgs" target="_blank">How the Quantum Eraser Rewrites the Past</a> </li>
            <li>  <a href="https://www.youtube.com/watch?v=ZuvK-od647c" target="_blank">Quantum Entanglement & Spooky Action at a Distance</a> </li>  
        </ol>
        
        <br />
        <br />
        <p style={{color: "blue",fontSize:20,   position: "absolute",left: 60}}>Weird? Let's chat, anyway.</p>
        <br />
        <br />


         </div>

    </div>)
  }

}
