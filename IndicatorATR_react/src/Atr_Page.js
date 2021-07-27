import React, { useState } from 'react';
import Select , { createFilter } from 'react-select';
import CardItems  from './ATR_items.js';
import "./Atr_Page.css"

export default class SelectCreateFilter extends Component {
  constructor(){
    super();
    state= {
      ignoreCase: false,
      ignoreAccents: false,
      trim: false,
      matchFromStart: false,
    }  
  };
  toggleOption = key => () => {
    this.setState(state => ({ [key]: !state[key] }));
  };
  render() {
    const { ignoreCase, ignoreAccents, trim, matchFromStart } = this.state;

    const filterConfig = {
      ignoreCase,
      ignoreAccents,
      trim,
      matchFrom: this.state.matchFromStart ? 'start' : 'any',
    };

  return (
    <div className="form-style col-4">
      <form> 
        <label id="aria-label" htmlFor="aria-example-input">
          Select A Option
        </label>

        {!!ariaFocusMessage && !!isMenuOpen && (
          <blockquote >"{ariaFocusMessage}"</blockquote>
        )}
        <Select
          defaultValue={CardItems[0]}
          isClearable
          isSearchable
          name="color"
          options={CardItems}
          filterOption={createFilter(filterConfig)}
        />
        <select className="time-frame" >
          <option value="A" selected disabled>Select a TimeFrame</option>
          <option value="B">1 Hour</option>
          <option value="C">2 Hour</option>
          <option value="D">4 Hour</option>
          <option value="E">12 Hour</option>
          <option value="F">1 Day</option>
          <option value="G">1 Week</option>
          <option value="H">1 Month</option>
        </select>
        <label id="aria-label" htmlFor="aria-example-input">
          Number Of TimeFrames:
        </label>
        <input 
          type="number" 
          className="time-frame" 
          placeholder="Enter Number Of TimeFrames"/>
      </form>
    </div>
  );
}