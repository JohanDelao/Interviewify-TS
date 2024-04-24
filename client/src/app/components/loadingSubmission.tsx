import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function LoadingSubmission() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="Loading">
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 50 }} />}
        size="large"
      />
      <p>This may take several minutes, hold tight!</p>
    </div>
  );
}