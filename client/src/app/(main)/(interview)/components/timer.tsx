import React from 'react';
import { Clock } from 'lucide-react';

type TimerProps = {
  time: number;
}

const Timer = ({ time } : TimerProps) => {

  const timeConvert = (time: number) => {
    if (time < 0) {
      return '00';
    }
    if (time < 10) {
      return '0' + String(time);
    } else {
      return String(time);
    }
  };

  return (
    <div className="flex items-center justify-end row-span-1 col-span-1 gap-2">
      <Clock className="w-4 h-4 text-accent" />
      <p className="text-base font-redHatText font-medium text-accent">
        {timeConvert(Math.floor(time / 60))}:{timeConvert(time % 60)} <span className="text-accent/60">/ 2:00</span>
      </p>
    </div>
  );
};

export default Timer;