import React from 'react';
import { Form,Label,Button  } from 'reactstrap';
import { PieChart } from 'react-minimal-pie-chart';
import Content from "./Atr_content.js";
import "./Atr_Page.css";


class AtrPage extends React.Component{
  constructor(props){
      super(props);
      this.state = { 
        data: [],
        coin:'ETHBTC',
        time:'1 hour'
       };
  }
  componentDidMount() {
    fetch(`/AtrPage`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  handleChange(e) {
    this.setState({ [e.target.item] : e.target.value });
 }

 handleSubmit = async e => {
  e.preventDefault();
  let data = {
    "coin": this.state.coin,
    "time": this.state.time
  }
  // sending form data on button submition clicked 
  const response = await fetch('/AtrPage', {
    method: 'POST',
    body: JSON.stringify({data}),
    headers: {
      'Content-Type' : 'application/json'
    }
  });
  const body = await response.text();
  this.setState({ dataResponse: body });
  console.log("respond"+this.state.dataResponse);
    
  }
  render(){
    if (this.state.data.length==0)
         return (<p>ops</p>);
    return (
      <div className="mt-3 form-style text-center">
        <h1>Binance ATR Calculator</h1>
        <Form >  
          <Label id="aria-label" className=" m-3" htmlFor="aria-example-input">
            Select An CoinPair:
          </Label>
          <select 
            value={this.state.data.CoinPair._id}
            onChange={this.handleChange.bind(this)}
            className="p-2 ">
            {this.state.data.CoinPair.map((option) => (
              <option value={option._id}>{option.symbol}</option>
            ))}
          </select>
          <Label id="aria-label" className="m-3 " htmlFor="aria-example-input">
          Select An TimeFrame:
          </Label>
          <select
            value={this.state.data.TimeFrames._id}
            onChange={this.handleChange.bind(this)}
            className="p-2" >
            {this.state.data.TimeFrames.map((option) => (
              <option value={option._id}>{option.time}</option>
            ))}
          </select>
          <Label id="aria-label" className="m-2" htmlFor="aria-example-input">
            Number Of TimeFrames:
          </Label>
          <input 
            type="number" 
            className="p-2" 
            placeholder="TimeFrames Number"/>
          <Button 
            type="submit" 
            outline color="warning" 
            className="btn-lg btn-block mt-5" 
            id="calculate" >
              Calculate
          </Button>
        </Form>
          <PieChart
            data={[
              { title: 'One', value: 10, color: '#E38627' },
              { title: 'Two', value: 15, color: '#C13C37' },
              { title: 'Three', value: 20, color: '#6A2135' },
            ]}
            animation
            animationDuration={500}
            animationEasing="ease-out"
            lineWidth={50}
            paddingAngle={10}
            startAngle={5}
            radius={20}
          />
      </div>
    );
  }
}


export default AtrPage;




