import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/eventdetail.css";
import Header from "./Header";

const EventDetail = () => {
  const { id } = useParams();

  // In a real application, you would fetch this data from an API based on the id
  const eventDetails = {
    1: {
      heading: "WEBSTRONAUTS",
      fullDescription:
        "The Webstronauts event is an exciting opportunity for participants to showcase their web development skills and creativity. In this event, participants are tasked with designing and developing a fully functional web page within a specified time frame. Using HTML, CSS, and JavaScript, participants must replicate a provided design and incorporate the provided assets. This event is designed to test not only technical abilities but also time management, attention to detail, and creativity in crafting a seamless user experience. It’s a great platform for both novice and experienced developers to demonstrate their understanding of web technologies and problem-solving skills.",
      rules: [
        {
          subheading: "Solo Flight Only:",
          description:
            "This is an individual mission. You are the sole captain of your web design spacecraft.",
        },
        {
          subheading: "Bring Your Own Starship:",
          description:
            "Pilots must bring their own laptops as they prepare to navigate the digital cosmos.",
        },
        {
          subheading: "Pre-Programmed Blueprints:",
          description:
            "The web page design and assets have already been provided. You must replicate them while adding your unique interstellar touch.",
        },
        {
          subheading: "45-Minute Countdown:",
          description:
            "The clock is ticking, with only 45 minutes to complete the mission. Time management is key to a successful launch.",
        },
        {
          subheading: "Galactic Tools Only:",
          description:
            "The use of HTML, CSS, and JavaScript is mandatory. Any other frameworks are strictly prohibited—no alien technologies allowed!",
        },
      ],
    },
    2: {
      heading: "COSMO CODE",
      fullDescription:
        "Calling all coders! Get ready to embark on a thrilling coding adventure with Cosmo Code! This is no ordinary competition—it's a test of speed, precision, and logic. You'll face off against other skilled programmers in a race to solve tricky challenges that will stretch your skills to the limit. Whether you’re here to compete, learn, or just have a blast, Cosmo Code promises a high-energy, brain-teasing experience. Think you’ve got what it takes to come out on top? Let’s find out!",
      rounds: [
        {
          title: "Round 1 (MCQ):",
          description:
            "The first round will consist of a set of multiple-choice questions (MCQs)",
        },
        {
          title: "Round 2 (Problem Solving):",
          description:
            "In the second round, selected participants will be required to solve coding problems. This round will be conducted on the HackerRank platform.",
        },
      ],
      rules: [
        {
          description:
            "Each participant will compete independently. Team participation is not allowed.",
        },
        {
          description:
            "Participants cannot use Python. Only other programming languages (such as C, C++, Java, JavaScript, etc.) are permitted",
        },
        {
          description:
            "Each participant must have an active account on HackerRank.",
        },
        {
          description:
            "All participants should bring their own laptops for the event.",
        },
      ],
    },
    5: {
      heading: "PROMPT PARADOX",
      fullDescription: `Join us for the ultimate prompt generation contest, "prompt paradox", where creativity meets innovative!This exciting event brings together AI enthusiasts,NLP experts,and creative minds to craft the most effective and imaginative prompts that drive AI systems to produce remarkable responses.This event consists of three levels-easy, medium and hard.The participants will be provided with an image. They must create a detailed text prompt that accurately describes the image. The AI will then generate an image based on the prompt. The goal is to see how closely the AI generated image matches the original image given , testing the participants' ability to capture visual details through descriptive prompts.`,
      rules: [
        {
          subheading: "Team Formation:",
          description:
            "Each team must consist of 2 members. Collaborate effectively to brainstorm and refine your prompts.",
        },
        {
          subheading: "Image Challenge:",
          description:
            "Each team will receive a unique image at the start of the event. You will have 08 minutes to create and submit prompts based on this image.",
        },
        {
          subheading: "Prompt Submission:",
          description:
            "Teams must submit their prompts within the designated time limit. Late submissions will not be accepted.",
        },
        {
          subheading: "Evaluation Criteria:",
          description:
            "Generated images will be judged based on creativity, relevance to the original image, and overall quality.",
        },
        {
          subheading: "Respect & Sportsmanship:",
          description:
            "Maintain a positive and respectful environment. Cheating or plagiarism will result in disqualification.",
        },
      ],
    },
    6: {
      heading: "UNIVERSAL HUNT",
      fullDescription:
        "Embark on an exciting adventure in the Universal Hunt! This thrilling treasure hunt invites participants to navigate a series of riddles and puzzles scattered across the college campus. Teams will receive clues guiding them to various locations, and as they solve each riddle, they’ll uncover the next destination. The ultimate goal is to find the final treasure. Join us for a fun, interactive experience that tests your problem-solving skills, teamwork, and creativity while exploring familiar places.",
      rules: [
        {
          description: "This is a team-based event.",
        },
        {
          description: "Each team must consist of up to 8 players.",
        },
        {
          description:
            "Teams are required to find the riddles hidden throughout the college campus.",
        },
        {
          description:
            "There will be a total of 6 common clues, and the 7th clue will serve as the key to unlocking the treasure chest located in the department laboratory’s PC.",
        },
        {
          description: "Only one team per college is allowed to participate.",
        },
        {
          description:
            "A maximum of 8 teams will be accepted for the event. Registration is on a first-come, first-served basis.",
        },
      ],
    },
    8: {
      heading: "QUIZSPAC",
      fullDescription:
        "Are you ready to challenge your mind and showcase your knowledge? Join us at QUIZSPAC, the ultimate quiz event at our symposium, where excitement meets intellect! From general trivia to cinematic brain teasers, this quiz will test your knowledge across two thrilling rounds.",
      rounds: [
        {
          title: "Round 1: Qui-z-illa",
          description:
            "Answer fun and fast-paced general and entertainment-based questions.",
        },
        {
          title: "Round 2: Cini-zilla ",
          description:
            "Shortlisted participants from Round 1 will dive into the world of cinema, with image-based puzzles and background music challenges!",
        },
        {
          title:
            "Whether you're a trivia master or a movie buff, gather your team or compete solo!",
        },
      ],
      rules: [
        {
          description:
            "You can participate as an individual or as a team (maximum of 3 members).",
        },
        {
          description:
            "For teams, only one member will represent them in Round 1.",
        },
        {
          description:
            "Scores will determine the final results. If two teams have the same score, the time taken will also be considered.",
        },
        {
          description:
            "The use of Google or any other external tools is strictly prohibited.",
        },
      ],
    },
    4: {
      heading: "GALACTIC HACKSPRINT",
      fullDescription:
        "Join the ultimate brainstorming event Galactic Hacksprint as part of our symposium. Participants will tackle one of five real-world problem statements from our website, presenting innovative, tech-based solutions. Each team, consisting of 1 to 3 members, will have a maximum of 5 minutes to present, with alarms at the 3rd and 5th minutes to ensure strict time adherence. Exceeding the limit will result in mark deductions. While final products or prototypes are encouraged, creativity and practicality are key. Get ready to dive into challenges, think outside the box, and present solutions that make a difference!",
        selectionProcess: [
          {
            subheading: "Email Submission:",
            description: (
              <>
                Teams must email their abstract (max 200 words) outlining the problem, solution, and impact to the email{" "}
                <a href="mailto:hacksprint.gcesalem@gmail.com" style={{ color: '#3498db', textDecoration: 'underline' }}>
                  hacksprint.gcesalem@gmail.com
                </a>
              </>
            ),
          },
          {
            subheading: "Abstract Evaluation:",
            description: "Abstracts will be evaluated based on clarity, innovation, and feasibility.",
          },
          {
            subheading: "Notification:",
            description: "Teams will be notified via email whether they are selected or not.",
          },
          {
            subheading: "PPT Submission:",
            description: (
              <>
                Selected teams must submit a detailed PPT explaining their idea, including the implementation plan, technology stack, and expected outcomes, to the same email address{" "}
                <a href="mailto:hacksprint.gcesalem@gmail.com" style={{ color: '#3498db', textDecoration: 'underline' }}>
                  hacksprint.gcesalem@gmail.com
                </a>
              </>
            ),
          },
        ],
        
      guidelines: [
        {
          description:
            "Choose one of the five problem statements from the website and present your idea or solution.",
        },
        {
          description:
            "Presentations are limited to 5 minutes, with alarms at 3 and 5 minutes; exceeding the time will result in mark deductions.",
        },
        {
          description:
            "Your project should provide tech-based solutions to real-world problems.",
        },
        {
          description:
            "Teams must have a minimum of 1 and a maximum of 3 members.",
        },
        {
          description: "Final products or prototypes are encouraged.",
        },
      ],
      problemStatement: [
        {
          title: "Agriculture:",
          description:
            "Crop diseases harm yields and cause financial losses for farmers. An AI-driven system will analyze crop images and environmental data to predict outbreaks. It will offer insights and treatment recommendations to manage risks effectively.",
        },
        {
          title: "Cybersecurity:",
          description:
            "In today's digital age, sharing sensitive files and information over the internet has become a common practice. However, the lack of robust security measures often exposes these files to unauthorized access, interception, and data breaches. There is a critical need for a secure file-sharing platform that ensures data confidentiality and integrity during transfer and storage.",
        },
        {
          title: "IoT:",
          description:
            "Many individuals, especially those with chronic health conditions, lack access to continuous health monitoring, making it difficult to detect early signs of health issues. There is a need for a solution that allows individuals to monitor their health status in real-time and receive timely alerts for abnormal readings.",
        },
        {
          title: "Space Tech:",
          description:
            "Satellites are essential for communication, weather forecasting, and navigation, but their maintenance and repair are complex. There is a need for an AI-enhanced maintenance and repair system that can monitor satellite health in real-time and predict failures.",
        },
        {
          title: "Health Care:",
          description:
            "Diagnosing rare diseases can be a significant challenge for healthcare professionals. There is a pressing need for an AI-driven tool that analyzes patient symptoms, medical history, and relevant clinical data to assist doctors in identifying potential rare diseases more efficiently.",
        },
      ],
    },
    7: {
      heading: "GALACTIC TALES",
      fullDescription:
        "Welcome to Galactic Tales, where your imagination takes the lead! In this fun and fast-paced event, your team will receive 5 random, unrelated words. Your mission? Work together to come up with a story that connects all these words in just 5 to 10 minutes!",
      note: [
        {
          description:
            "Your story can be about anything, as long as it’s creative, original, and uses all 5 words. Whether it’s a thrilling space adventure or a touching tale of friendship, it’s up to you! The goal is to think quickly, work as a team, and craft a story that’s both unique and engaging.",
        },
        {
          description:
            "Are you ready to accept the challenge and create a story that stands out in the galaxy?",
        },
      ],
    },
    3: {
      heading: "GNIDOC",
      fullDescription:
        "Gear up for a thrilling reverse coding adventure! Your mission: decode cryptic outputs by testing various inputs and uncover the hidden logic behind the problem. Test your hypotheses, gather clues, and when you’ve unlocked the pattern, craft your solution with precision and conquer the challenge! Build Your Ultimate Space crew (Max 3 members) and tackle the 2-round challenge.",
      rounds: [
        {
          title: "Round 1: Online Debug Quiz",
          description:
            "Test your coding aptitude with a fun quiz designed to warm up your brain.",
        },
        {
          title: "Round 2: Reverse Coding",
          description:
            "Enter the Gnidoc Interface, where you’ll test different inputs to crack the logic puzzle. Analyze the output, craft your strategy, and once you’ve figured out the secret logic, code your solution in the HackerRank editor.",
        },
      ],
      note: [
        {
          description: "Team Name: Keep It Funky!",
        },
        {
          description: "Crew Members: Choose up to 3 coders",
        },
        {
          description:
            "Preferred Language: Select your weapon—C, C++, Java, or JavaScript! (Sorry Fellas, No python)",
        },
        {
          title: "WARNING!",
          description:"This event may cause: Non-stop coding excitement, Loads of laughter, Strong team bonding, Pure & stress-free problem-solving bliss"
        }
      ],
      rules: [
        {
          description:
            "You can participate as an individual or as a team (maximum of 3 members).",
        },
        {
          description: "Only C, C++, Java, or JavaScript are allowed.",
        },
        {
          description:
            "No shortcuts, no built-in libraries—just your sharp skills and instincts!",
        },
        {
          description:
            "Scores will determine the final results. If two teams have the same score, the time taken will also be considered.",
        },
        {
          description:
            "The use of Google, CHAT-GPT or any other fancy AI tools will lead to immediate elimination!",
        },
      ],
      suprise: [
        {
          title: "Galactic Pit Stops!",
          description:
            "Need a break? Fun activities are along the way to keep your energy up.",
        },
        {
          title: "Cosmic Hints Available!",
          description:
            "Complete special side challenges to unlock hints and guide you through tricky parts of the problem.",
        },
      ],
    },
  };

  const event = eventDetails[id];

  if (!event) {
    return <div className="event-detail">Event not found</div>;
  }

  return (
    <div className="eventdetail-navbar">
      <Header />
      <div className="event-container">
        <div className="event-detail">
          <h1 className="event-heading" id="eventdetail-h">
            {event.heading}
          </h1>
          <h3 className="description-heading">Description:</h3>
          <p className="event-full-description">{event.fullDescription}</p>

          {/* event-selectionprocess */}

          {event.selectionProcess && (
            <div className="event-rounds">
              <h3 className="rounds-heading">Selection Process:</h3>
              <ul className="rounds-list">
                {event.selectionProcess.map((process, index) => (
                  <li key={index} className="round-item">
                    <span className="rule-subheading">
                      {process.subheading}
                    </span>{" "}
                    {process.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* event-guidelines */}

          {event.guidelines && (
            <div className="event-rounds">
              <h3 className="rounds-heading">Guidelines:</h3>
              <ul className="rounds-list">
                {event.guidelines.map((process, index) => (
                  <li key={index} className="round-item">
                    {process.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* event-problemstatement*/}

          {event.problemStatement && (
            <div className="event-rounds">
              <h3 className="rounds-heading">Problem Statement:</h3>
              <ul className="rounds-list">
                {event.problemStatement.map((process, index) => (
                  <li key={index} className="round-item">
                    <span className="rule-subheading">{process.title}</span>{" "}
                    {process.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Display rounds if they exist */}

          {event.rounds && (
            <div className="event-rounds">
              <h3 className="rounds-heading">Rounds:</h3>
              <ul className="rounds-list">
                {event.rounds.map((round, index) => (
                  <li key={index} className="round-item">
                    <div className="btn-arrow">
                    <span className="rule-subheading">{round.title}</span>
                    <span className="rule-description">{round.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* rules */}

          {event.rules && (
            <div className="">
              <h3 className="eventdetail-rules">Rules:</h3>
              <ul className="event-rules">
                {event.rules.map((rule, index) => (
                  <li key={index}>
                    <div className="btn-arrow">
                    <span className="rule-subheading">{rule.subheading}</span>
                    <span className="rule-description">{rule.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Notes */}

          {event.note && (
            <div className="event-rounds">
              <h3 className="rounds-heading">Note:</h3>
              <ul className="rounds-list">
                {event.note.map((process, index) => (
                  <li key={index} className="round-item">
                    <span className="rule-subheading">{process.title}</span>{process.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Surprise */}

          {event.suprise && (
            <div className="event-rounds">
              <h3 className="rounds-heading">Suprise Awaits!</h3>
              <ul className="rounds-list">
                {event.suprise.map((process, index) => (
                  <li key={index} className="round-item">
                    <span className="rule-subheading">{process.title}</span>{process.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            className="event-custom-btn event-btn-11"
            id="eventdetail-btn"
          >
            <Link to="/" id="event-btn-link">
              Back to Home
            </Link>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
