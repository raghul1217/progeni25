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
      distance: '40px',
      duration: 700,
      easing: 'ease-in-out',
      reset: true
    });
  }, []);

  const events = [
    { id: 1, icon: 'fa-code', heading: 'WEBSTRONAUTS', description: 'Create stunning websites in this hands-on competition. Let your creativity shine through design!' , cardColor: '#FF5733' },
    { id: 2, icon: 'fa-laptop-code', heading: 'COSMO CODE', description: 'A fast-paced coding competition that tests programmers problem-solving skills and precision' , cardColor: '#33FF57' },
    { id: 3, icon: 'fas fa-file-code', heading: 'GNIDOC', description: 'Decode the mystery! Reverse-engineer solutions and demonstrate your analytical prowess.' , cardColor: '#3357FF' },
    { id: 4, icon: 'fas fa-lightbulb', heading: 'GALACTIC HACKSPRINT', description: 'Present innovative solutions to real-world problems. Inspire and engage with your ideas!' , cardColor: '#FF33A8' },
    { id: 5, icon: 'fas fa-robot', heading: 'PROMPT PARADOX', description: 'Generate prompts to match provided visuals in this creative challenge by using AI Tools!' , cardColor: '#FFC300' },
    { id: 6, icon: 'fa-running', heading: 'UNIVERSAL HUNT', description: 'Embark on an exhilarating scavenger hunt. Solve clues and race to the finish!' , cardColor: '#DAF7A6' },
    { id: 7, icon: 'fas fa-brain', heading: 'GALACTIC TALES', description: 'Craft captivating stories using given words. Let your imagination run wild in this creative challenge!' , cardColor: '#C70039' },
    { id: 8, icon: 'fas fa-question-circle', heading: 'QUIZSPAC', description: 'Test your knowledge in a fun, fast-paced quiz! Compete against peers for ultimate bragging rights.' , cardColor: '#900C3F' }
  ];

  const techEvents = events.filter(event => event.id <= 4);
  const nonTechEvents = events.filter(event => event.id > 4);

  return (
    <div className="events-wrapper">
      {/* <h1 className="main-heading">Upcoming Events</h1> */}
      <div className="event-section">
        <div className="eventpage2-head special-head"><h2 className="event-type-heading">Tech Events</h2></div>
        <div className="events-container">
          {techEvents.map((event) => (
            <EventCard key={event.id} {...event} uniqueId={`tech-event-${event.id}`} />
          ))}
        </div>
      </div>

      <div className="event-section">
        <div className="eventpage2-head"><h2 className="event-type-heading">Non-Tech Events</h2></div>
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
