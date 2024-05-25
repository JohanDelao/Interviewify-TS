import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';

const Timer = () => {
  return (
    <div className="flex items-center justify-end row-span-1 col-span-1 gap-2">
      <ClockCircleOutlined className="text-xl text-accent" />
      <p className="text-base font-redHatText font-medium text-accent">
        2:00 <span className="text-accent/60">/ 2:00</span>
      </p>
    </div>
  );
};

export default Timer;