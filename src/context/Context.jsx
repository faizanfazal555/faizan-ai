import { createContext, useState } from "react";
import run from "../config/geminiAI";

export const context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async () => {
    setResultData(""); 
    setLoading(true); 
    setShowResult(true); 
    setRecentPrompt(input); 
    try {
      const response = await run(input); 
      console.log("AI Response:", response);
      setResultData(response); 
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResultData("Error fetching response."); 
    } finally {
      setLoading(false); 
      setInput(""); 
    }
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    input,
    setInput,
    resultData,
  };

  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};

export default ContextProvider;
