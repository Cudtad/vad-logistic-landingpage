import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface CountNumberProps {
  value: number;
  suffix?: ReactNode | string
}

const CountNumber: React.FC<CountNumberProps> = ({ value, suffix }) => {
  const [count, setCount] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (countRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(countRef.current);
    }
    return () => observer && observer.disconnect();
  }, []);

  useEffect(() => {
    if (hasStarted && count < value) {
      const duration = 2000; // Thời gian đếm tổng cộng là 2 giây
      const steps = value; // Số bước cần đếm tới giá trị
      const increment = Math.ceil(value / (duration / 10)); // Tính toán giá trị tăng mỗi bước
      const intervalTime = 10; // 10ms mỗi bước

      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= value) {
            clearInterval(interval);
            return value;
          }
          return prevCount + increment;
        });
      }, intervalTime);
      return () => clearInterval(interval);
    }
  }, [hasStarted, value]);

  return <div className='text-xl md:text-3xl font-semibold text-primary' ref={countRef}>{count}{suffix}</div>;
};

export default CountNumber;
