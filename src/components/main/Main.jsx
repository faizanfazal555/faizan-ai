import React, { useContext, useState, useRef } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    input,
    setInput,
    resultData,
  } = useContext(context);

  const [copySuccess, setCopySuccess] = useState(""); // State to show copy success message
  const resultRef = useRef(null); // Ref to hold the result content

  const handleCardClick = (text) => {
    setInput(text);
    onSent();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSent();
    }
  };

  const handleCopy = () => {
    if (resultRef.current) {
      navigator.clipboard.writeText(resultRef.current.innerText)
        .then(() => {
          setCopySuccess("Copied!");
          setTimeout(() => setCopySuccess(""), 2000); // Clear the success message after 2 seconds
        })
        .catch(() => {
          setCopySuccess("Failed to copy!");
        });
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Faizan-Ai</p>
        <img src={assets.faizan_icon} alt="faizan_icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span className="welcome-text">WELCOME🫴.</span>
              </p>
              <p>How Can I Help You Today?</p>
            </div>
            <div className="cards_box">
              <div className="card" onClick={() => handleCardClick("Recommend new types of water sports, including pros & cons.")}>
                <p>Recommend new types of water sports, including pros & cons.</p>
                <img src={assets.compass_icon} alt="compass_icon" />
              </div>
              <div className="card" onClick={() => handleCardClick("Compare the differences between pickleball and tennis.")}>
                <p>Compare the differences between pickleball and tennis.</p>
                <img src={assets.bulb_icon} alt="bulb_icon" />
              </div>
              <div className="card" onClick={() => handleCardClick("Outline an organized & logical sales pitch for a new product?")}>
                <p>Outline an organized & logical sales pitch for a new product?</p>
                <img src={assets.message_icon} alt="message_icon" />
              </div>
              <div className="card" onClick={() => handleCardClick("Improve the readability of the following code.")}>
                <p>Improve the readability of the following code.</p>
                <img src={assets.code_icon} alt="code_icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result_title">
              <img src={assets.faizan_icon} alt="faizan_icon" />
              <h2>{recentPrompt}</h2>
            </div>
            <div className="result_data">
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <div ref={resultRef} className="result_text">
                  <p>{resultData}</p>
                  <button className="copy-button" onClick={handleCopy}>
                    Copy
                  </button>
                  {copySuccess && <span className="copy-success">{copySuccess}</span>}
                </div>
              )}
            </div>
          </div>
        )}
        <div className="main_bottom">
          <div className="search_box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              onKeyDown={handleKeyDown}
            />
            <div>
              <img onClick={onSent} src={assets.send_icon} alt="send_icon" />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Main;
