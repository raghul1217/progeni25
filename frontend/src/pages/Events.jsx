import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import EventCard from '../components/EventCard';
import '../styles/eventcard.css';

const Events = () => {

  

  useEffect(() => {

    ScrollReveal().reveal('.main-heading, .event-type-heading', {
      origin: 'top',
      distance: '20px',
      duration: 600,
      easing: 'ease-in-out',
      reset: true
    });

    ScrollReveal().reveal('.parent', {
      origin: 'bottom',
      distance: '50px',
      duration: 700,
      easing: 'ease-in-out',
      reset: true
    });
  }, []);

  const events = [
    { id: 1, icon: 'fa-code', heading: 'WEBSTRONUTS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quisquam fugit? Quae temporibus cupiditate ea est nemo porro sapiente exercitationem!' , cardColor: '#FF5733' },
    { id: 2, icon: 'fa-laptop-code', heading: 'COSMO CODE', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quisquam fugit? Quae temporibus cupiditate ea est nemo porro sapiente exercitationem!' , cardColor: '#33FF57' },
    { id: 3, icon: 'fa-bullhorn', heading: 'GNIDOC', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quisquam fugit? Quae temporibus cupiditate ea est nemo porro sapiente exercitationem!' , cardColor: '#3357FF' },
    { id: 4, icon: 'fa-briefcase', heading: 'GALATIC HACKSPRINT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quisquam fugit? Quae temporibus cupiditate ea est nemo porro sapiente exercitationem!' , cardColor: '#FF33A8' },
    { id: 5, icon: 'fa-palette', heading: 'PROMPT PARADOX', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quisquam fugit? Quae temporibus cupiditate ea est nemo porro sapiente exercitationem!' , cardColor: '#FFC300' },
    { id: 6, icon: 'fa-utensils', heading: 'UNIVERSAL HUNT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quisquam fugit? Quae temporibus cupiditate ea est nemo porro sapiente exercitationem!' , cardColor: '#DAF7A6' },
    { id: 7, icon: 'fa-music', heading: 'GALATIC TALES', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quisquam fugit? Quae temporibus cupiditate ea est nemo porro sapiente exercitationem!' , cardColor: '#C70039' },
    { id: 8, icon: 'fa-running', heading: 'QUIZSPAC', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quisquam fugit? Quae temporibus cupiditate ea est nemo porro sapiente exercitationem!' , cardColor: '#900C3F' }
  ];

  const techEvents = events.filter(event => event.id <= 4);
  const nonTechEvents = events.filter(event => event.id > 4);

  return (
    <div className="events-wrapper">
      {/* <h1 className="main-heading">Upcoming Events</h1> */}
      <div className="event-section">
        <h2 className="event-type-heading">Tech Events</h2>
        <div className="events-container">
          {techEvents.map((event) => (
            <EventCard key={event.id} {...event} uniqueId={`tech-event-${event.id}`} />
          ))}
        </div>
      </div>

      <div className="event-section">
        <h2 className="event-type-heading">Non-Tech Events</h2>
        <div className="events-container">
          {nonTechEvents.map((event) => (
            <EventCard key={event.id} {...event} uniqueId={`non-tech-event-${event.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
