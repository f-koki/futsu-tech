import React from 'react'
import './TimelinePage.css'

const TimelinePage: React.FC = () => (
  <div className="row">
  <div className="col-md-12">
    <div className="main-timeline">
      <a href="#" className="timeline">
        <div className="timeline-icon"><i className="fa fa-globe"></i></div>
        <div className="timeline-content">
          <h3 className="title">Web Designer</h3>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet
            nam nostrum odit quasi ullam voluptatum.
          </p>
        </div>
      </a>
      <a href="#" className="timeline">
        <div className="timeline-icon"><i className="fa fa-rocket"></i></div>
        <div className="timeline-content">
          <h3 className="title">Web Developer</h3>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet
            nam nostrum odit quasi ullam voluptatum.
          </p>
        </div>
      </a>
      <a href="#" className="timeline">
        <div className="timeline-icon"><i className="fa fa-briefcase"></i></div>
        <div className="timeline-content">
          <h3 className="title">Web Designer</h3>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet
            nam nostrum odit quasi ullam voluptatum.
          </p>
        </div>
      </a>
      <a href="#" className="timeline">
        <div className="timeline-icon"><i className="fa fa-mobile"></i></div>
        <div className="timeline-content">
          <h3 className="title">Web Developer</h3>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet
            nam nostrum odit quasi ullam voluptatum.
          </p>
        </div>
      </a>
    </div>
  </div>
</div>
)

export default TimelinePage