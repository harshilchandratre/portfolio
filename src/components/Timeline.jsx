import React from "react";
import '../styles/Timeline.css'
const Timeline = ({year, heading, description}) => {
  return (
    <div className="Timeline-main dark">
      <section>
        <div className="section-title">{year}</div>
        <div className="section-content">
          <article>
            <aside>
              <div className="dot"></div>
              <div className="line"></div>
            </aside>
            <div className="article-content">
              <h3>{heading}</h3>
              <p>{description}</p>
            </div>
          </article>
        </div>
      </section>      
    </div>
  );
};

export default Timeline;