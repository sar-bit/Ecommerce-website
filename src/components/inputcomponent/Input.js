import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import "./InputStyles.css";

const Input = ({ type, placeholder, onClick, required, onChange, error }) => {
  return (
    <div className="Inputarea">
     

      <TextField
        style={{ width: "100%" }}
        id="outlined-basic"
        label={placeholder}
        variant="outlined"
        onChange={onChange}
        required={required}
        // error={error?error:''}
      />

      {/* <FormControl>{error}</FormControl> */}
     
    </div>
  );
};

export default Input;
