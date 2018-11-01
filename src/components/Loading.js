import React from 'react';
import { Spin } from 'antd';

// eslint-disable-next-line react/prop-types
const Loading = ({ tip }) => (
  <div>
    <Spin
      size="large"
      tip={tip}
      style={{ margin: '90px auto', display: 'block' }}
    />
  </div>
);

export default Loading;
