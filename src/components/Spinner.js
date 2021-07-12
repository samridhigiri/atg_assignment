import React from 'react';
import PropTypes from 'prop-types';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";

function Spinner({spinner}){
    return(
        <div className='spinnerCont'>
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        visible={spinner}
      />
        </div>
    );
}

Spinner.propTypes = {
  spinner: PropTypes.bool
};

export default Spinner;