import React from 'react';
import useStreamingText from '../../hooks/useStreamingText';

const msg = ({ text }) => {
  const streamedText = useStreamingText(text, 25);

  return (
    <div className="flex justify-start">
      <div className="max-w-xs lg:max-w-md px-4 py-3 bg-white text-black border border-gray-300">
        <p className="text-base">{streamedText}</p>
      </div>
    </div>
  );
};

export default msg