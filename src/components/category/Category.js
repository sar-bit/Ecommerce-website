import React, { Fragment, useEffect } from "react";
import './CategoryStyles.css'

const Category = ({ name }) => {
    
  return (
    <Fragment>
   <label className="categorylabel">
            {name}
          </label>
    </Fragment>
  );
};

export default React.memo(Category);
