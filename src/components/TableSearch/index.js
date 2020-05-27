import React, {useState} from "react";
export default (props) => {

  const [value, setValue] = useState('')

  const valueChangeHandler = e => {
    setValue(e.target.value)
  }

  return (
    <div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" onClick={()=> props.onSearch(value)} id="button-addon1">
            Search
          </button>
        </div> 
        <input required type="text" className="form-control" onChange={valueChangeHandler} value={value} />
      </div>
    </div>
  );
};
