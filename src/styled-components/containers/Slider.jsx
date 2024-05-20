import React, { useState, useEffect } from 'react';
import TeacherCard from '../../components/home/TeacherCard';

const Slider = ({ teachers, interval = 3000 }) => {
  if (!teachers || teachers.length === 0) {
    return <h3 className="text-center">Cargando datos...</h3>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % teachers.length);
    }, interval);

    return () => clearInterval(intervalId);  // Clean up the interval
  }, [teachers.length, interval]);

  useEffect(() => {
    setOffset(-currentIndex * 100 / (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3));
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden mb-10 w-full">
      <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(${offset}%)` }}>
        {teachers.map((teacher, index) => (
          <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3">
            <TeacherCard teacher={teacher} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
