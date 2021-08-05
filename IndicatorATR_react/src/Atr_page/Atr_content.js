import React from 'react';
import { Form,Label,Button  } from 'reactstrap';
import "./Atr_Page.css"


class Content extends React.Component{
    constructor(props){
        super(props);
    }
  
    handleChange(e) {
    this.setState({ [e.target.item] : e.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
    }

  render(){
    return (
      <div className="mt-3 form-style text-center">
        <h1>Binance ATR Calculator</h1>
        <Form >  
          <Label id="aria-label" className=" m-3" htmlFor="aria-example-input">
            Select An CoinPair:
          </Label>
          <select 
            value={this.props.data.CoinPair._id}
            onChange={this.handleChange.bind(this)}
            className="p-2 ">
            {this.props.data.CoinPair.map((option) => (
              <option value={option._id}>{option.symbol}</option>
            ))}
          </select>
          <Label id="aria-label" className="m-3 " htmlFor="aria-example-input">
          Select An TimeFrame:
          </Label>
          <select
            value={this.props.data.TimeFrames._id}
            onChange={this.handleChange.bind(this)}
            className="p-2" >
            {this.state.props.TimeFrames.map((option) => (
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
      </div>
    );
  }
}


export default Content;