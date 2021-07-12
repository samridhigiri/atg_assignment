import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import { formatDate } from '../utils';

 
function Raceinformation({data}){
  const time = formatDate(data?.startTime);
   return(
       <div className='row raceRow'>
       <span className='raceNumber'>#{data?.number}</span>
       <span className='raceName'>{data?.name ?? "No name available"}</span>
       <span className='raceDate'>{time}</span>
     </div>
   );
}

Raceinformation.propTypes = {
  data: PropTypes.object
};

export default Raceinformation;