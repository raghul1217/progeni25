import React from 'react';
import '../styles/eventcard.css';
import { Link } from 'react-router-dom';

const EventCard = ({ id, icon, heading, description, uniqueId }) => {
  return (
    <div className="container">
      <div className='parent' id={uniqueId}>
          <div className="card">
            <div className="content-box">
                <h1 className="card-title" id="card-t">{heading}</h1>
                <p className="card-content">{description}</p>
                <span className='see-more'><Link to={`/event/${id}`} className="read-more">Read More</Link></span>
            </div>
            <div className="date-box">
              <i className={`fa-solid ${icon}`} id="icon"></i>
            </div>
          </div>
      </div>
    </div>
  );
};

export default EventCard;
