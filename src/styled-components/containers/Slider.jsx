import React, { useState, useEffect } from 'react';
import TeacherCard from '../../components/home/TeacherCard';

const Slider = ({ teachers, interval = 3000 }) => {
  if (!teachers || teachers.length === 0) {
    return <h3>cargando datos</h3>;
  }


  const extendedTeachers = [...teachers, ...teachers];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex + 1 === teachers.length) {

          return 0;

        }
        return prevIndex + 1;
      });
    }, interval);


  }, [teachers.length, interval]);

  useEffect(() => {
    setOffset(-currentIndex * 100 / 3);  
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden mb-10 w-full">
      <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(${offset}%)` }}>
        {extendedTeachers.map((teacher, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/3"
          >
            <TeacherCard teacher={teacher} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
