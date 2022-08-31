import React from "react";
import "./recentstyle.css"

function Recent(props) {
  return(
    <div className="recent_div">
      <div style={{padding:"1%"}}/>
      <span className="recent_lineone">Recent</span>
      <div style={{padding:"1%"}}/>
      <div className="row recent_data">
        <div className="col-md-4 col-sm-12 yy">
          <img src={props.fullone.picture} className="recent_img"/>
        </div>

        <div className="pp col-md-8 col-sm-12">
            <div style={{padding:"1%"}}/>
            <span className="recent_subject">{props.fullone.subject}</span>
            <span className="recent_date">{props.fullone.date.slice(0,10)}</span>
            <div style={{padding:"2%"}}/>
            <span className="recent_title">{props.fullone.title}</span>
            <span className="recent_details">{props.fullone.content}</span>
            <div style={{padding:"2.5%"}}/>
            <img className="recent_profile" src={props.fullone.profile}/>
            <span className="recent_name">{props.fullone.name}</span>
            <div style={{padding:"1%"}}/>
        </div>

      </div>
      <div style={{padding:"3%"}}/>
    </div>
  )
}

export default Recent;
