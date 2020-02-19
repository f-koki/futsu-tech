import React from 'react'
import './TimelinePage.css'

const TimelinePage: React.FC = () => (
  <div className="container">
    <div className="timeline">
      <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
        <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
          <h3 className=" text-light">大学受験失敗</h3>
          <p>記憶術に魅了され、受験失敗。
        </p>
        </div>
        <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
          <img src="img/img13.png" className="img-fluid" alt="img" />
        </div>
        <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
          <time>2011-03</time>
        </div>
      </div>
      <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
        <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
          <h3 className=" text-light">浪人期間</h3>
          <p>受験勉強に意味を見いだせず、ネット大喜利に没頭する。センター試験模試は2chの受験板でネタバレ情報をGETし全ての番号を暗記して8割とっているように見せかけて親への体裁を保っていた。
        </p>
        </div>
        <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
          <img src="img/img13.png" className="img-fluid" alt="img" />
        </div>
        <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
          <time>2012-03</time>
        </div>
      </div>
      <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
        <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
          <h3 className=" text-light">Timeline Heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet deleniti hic quas qui cumque
            delectus aliquid, eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis dignissimos porro.
        </p>
        </div>
        <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
          <img src="img/img13.png" className="img-fluid" alt="img" />
        </div>
        <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
          <time>2018-02-23</time>
        </div>
      </div>
      <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
        <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
          <h3 className=" text-light">Timeline Heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet deleniti hic quas qui cumque
            delectus aliquid, eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis dignissimos porro.
        </p>
        </div>
        <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
          <img src="img/img13.png" className="img-fluid" alt="img" />
        </div>
        <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
          <time>2018-02-23</time>
        </div>
      </div>
    </div>
  </div>
)

export default TimelinePage