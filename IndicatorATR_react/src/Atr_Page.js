import React, { useState} from 'react';
import Select from 'react-select';
import CardItems  from './ATR_items.js';
import TimeFrame_item  from './TimeFrame_item.js';
import "./Atr_Page.css"


export default function AtrPage() {
    const [coinpair, setCoinpair] = useState({});
    const [time, setTime]= useState({});

    // async function fetchData() {
    //   const res = await fetch(`/`);
    //   res
    //     .json()
    //     .then(res => setCarditems(res))
    //     .then(res => setTime(res))
    // }
  
    // useEffect(() => {
    //   fetchData();
    // });

    
    return (
      <div className="form-style col-4">
        <form> 
          <label id="aria-label" className="mb-3" htmlFor="aria-example-input">
            Select An CoinPair
          </label>
          <Select
            onChange={setCoinpair}
            name="colors"
            options={CardItems}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select Coin Pair"
          />
          <label id="aria-label" className="mb-3" htmlFor="aria-example-input">
          Select An TimeFrame
          </label>
          <Select
            onChange={setTime}
            name="colors"
            options={TimeFrame_item}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select TimeFrame"
          />
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
