import React from 'react';
import PropTypes from 'prop-types';
 
 import './index.css';

 import { formatDate } from '../utils';
 
 function Trackdetails({data}){
  const time = formatDate(data?.startTime);
    return(
        <div className='row trackRow'>
        <b>{`${(data?.tracks[0]?.name ?? "No name available")} - ${time}`}</b>
      </div>
    );
 }

 Trackdetails.propTypes = {
  data: PropTypes.object
};

 export default Trackdetails;