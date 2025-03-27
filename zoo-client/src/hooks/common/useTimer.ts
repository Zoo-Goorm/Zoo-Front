import { useEffect, useState } from 'react';

function useTimer(initialTime: number) {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const startTimer = () => {
    setIsTimerActive(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTimerActive) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 0) {
            clearInterval(timer);
            setIsTimerActive(false);

            return 0;
          }

          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isTimerActive]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return { timeRemaining, isTimerActive, startTimer, formatTime };
}

export default useTimer;
