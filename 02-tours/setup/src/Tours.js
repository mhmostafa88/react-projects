import React from 'react';
import Tour from './Tour';
const Tours = ({tours}) => {
  return <section>
    <div className="title">
      <h2>our tours</h2>
      <div className='underline'></div>
    </div>
    <div>
      {tours.map((tour) => {
        {/* use ...tour to pass all of the tour parameters into the tour component */}
        return <Tour key={tour.id} {...tour} ></Tour>
      }
      )}
    </div>
  </section>
};

export default Tours;
