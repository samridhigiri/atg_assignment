import React from 'react';
import PropTypes from 'prop-types';


import { Select } from 'antd';
import './index.css';
import { Row, Col } from 'antd';

const { Option } = Select;

function GametypeSelection({handleChange}){

return(
  <Row>
  <Col span={6} offset = {9}>
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select Game Type"
    onChange={handleChange}
>
      <Option value="V75">V75</Option>
      <Option value="V86">V86</Option>
      <Option value="GS75">GS75</Option>
    </Select>
  </Col>
</Row>
);

}

GametypeSelection.propTypes = {
  handleChange: PropTypes.func
};

export default GametypeSelection;