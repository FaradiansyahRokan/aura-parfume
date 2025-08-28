import { useState, useEffect } from 'react';

const useStreamingText = (fullText = '', speed = 30) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (fullText) {
      setDisplayedText(''); // Reset saat teks baru masuk
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < fullText.length) {
          setDisplayedText(prev => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);

      return () => clearInterval(intervalId); // Cleanup
    }
  }, [fullText, speed]);

  return displayedText;
};

export default useStreamingText;