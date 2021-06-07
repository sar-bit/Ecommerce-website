import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";

const CommonButton = ({type, disabled, name, onClick, color }) => {
  return (
    <Fragment>
      <Button
        variant="contained"
        disabled={disabled}
        onClick={onClick}
        color={color}
        type={type}
      >
        {name}
      </Button>
    </Fragment>
  );
};

export default CommonButton;
