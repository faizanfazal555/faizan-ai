import React from "react";
import "./Result.css"; // Add new styles for result data
import { assets } from "../../assets/assets";

const Result = ({ recentPrompt, loading, resultData }) => {
  return (
    <div className="result">
      <div className="result_title">
        <img src={assets.faizan_icon} alt="faizan_icon" />
        <p>{recentPrompt}</p>
      </div>
      <div className="result_data">
        <img src={assets.gemini_icon} alt="gemini_icon" />
        {loading ? (
          <div className="loader">
            <hr />
            <hr />
            <hr />
          </div>
        ) : (
          <div className="result_text">
            <h3>{resultData}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
