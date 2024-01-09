import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
function Experience() {
  return (
    <div className="Experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2014 - 2019"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title"> 
              Rockhurst High School, Kansas City, Missouri
            </h3>
            <p> High School Diploma </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date="July 2023 - Present"
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title"> 
              Front-End Student Web Developer - KU Information Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lawrence, Kansas
            </h4>
            <p> Develope and update UI for all webpages associated with the University of Kansas </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date="June 2023 - May 2023"
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title"> 
              Software Engineer Intern - C2FO 
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Leawood, Kansas
            </h4>
            <p> 
              Collaborated with a 12-person team responsible for the backend extract, transform
              and load (ETL) process for integration with buyers and funding partners.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2019 - 2024"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title"> 
              University of Kansas, Lawrence, Kansas
            </h3>
            <p> 
                Bachelors in Computer Science 
                <br/> 
                Cyber Security Certificate
            </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;