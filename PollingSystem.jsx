import React, { useState } from "react";

export default function PollingSystem() {
  const [question] = useState("Which topic do you understand best?");
  const [options, setOptions] = useState([
    { text: "React Basics", votes: 0 },
    { text: "JavaScript", votes: 0 },
    { text: "CSS", votes: 0 },
    { text: "Machine Learning", votes: 0 }
  ]);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (index) => {
    if (hasVoted) return;

    const updatedOptions = options.map((opt, i) =>
      i === index ? { ...opt, votes: opt.votes + 1 } : opt
    );

    setOptions(updatedOptions);
    setHasVoted(true);
  };

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

  return (
    <div className="poll-container">
      <h2 className="poll-title">Classroom Live Poll</h2>
      <p className="poll-question">{question}</p>

      <div className="options">
        {options.map((option, index) => {
          const percentage = totalVotes
            ? Math.round((option.votes / totalVotes) * 100)
            : 0;

          return (
            <div key={index} className="option">
              <button
                className="vote-button"
                onClick={() => handleVote(index)}
                disabled={hasVoted}
              >
                {option.text}
              </button>
              <div className="result-bar">
                <div
                  className="result-fill"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="percentage">{percentage}%</span>
            </div>
          );
        })}
      </div>

      {hasVoted && <p className="thank-you">Thank you for voting!</p>}

      <style>{`
        .poll-container {
          max-width: 500px;
          margin: 40px auto;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
          background: #ffffff;
        }

        .poll-title {
          text-align: center;
          color: #1f2937;
        }

        .poll-question {
          text-align: center;
          font-size: 18px;
          margin-bottom: 20px;
        }

        .option {
          margin-bottom: 15px;
        }

        .vote-button {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 8px;
          background: #2563eb;
          color: white;
          font-size: 14px;
          cursor: pointer;
          margin-bottom: 6px;
        }

        .vote-button:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }

        .result-bar {
          width: 100%;
          height: 10px;
          background: #e5e7eb;
          border-radius: 6px;
          overflow: hidden;
        }

        .result-fill {
          height: 100%;
          background: #22c55e;
          transition: width 0.3s ease;
        }

        .percentage {
          font-size: 12px;
          color: #374151;
        }

        .thank-you {
          text-align: center;
          margin-top: 15px;
          color: #16a34a;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
