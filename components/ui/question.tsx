import React from "react";

interface RankStatusProps {
  rank: number;
  percentile: number;
  score: number;
  correct: number;
  incorrect: number;
  skipped: number;
}

const RankStatus: React.FC<RankStatusProps> = ({ rank, percentile, score, }) => {

  // Determine feedback message
  const feedback =
    score >= 10
      ? "🎉 Great job! Keep up the good work!"
      : "📈 Keep practicing! You'll improve with time!";

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-200">
      {/* Section Header */}
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">📊 Question Analytics</h2>
      
      {/* Performance Stats */}
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
        <div className="text-center">
          <p className="text-gray-500 text-sm">Rank</p>
          <p className="text-lg font-semibold text-gray-800">#{rank}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-sm">Percentile</p>
          <p className="text-lg font-semibold text-gray-800">{percentile}%</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-sm">Score</p>
          <p className="text-lg font-semibold text-gray-800">{score} / 15</p>
        </div>
      </div>

      {/* Question Analytics */}
      <div className="mt-5 space-y-2">
        <div className="flex justify-between items-center bg-green-100 p-3 rounded-lg">
          <span className="text-green-700 font-medium">✅ Correct</span>
          <span className="text-green-900 font-semibold">{score}</span>
        </div>
        <div className="flex justify-between items-center bg-red-100 p-3 rounded-lg">
          <span className="text-red-700 font-medium">❌ Incorrect</span>
          <span className="text-red-900 font-semibold">{score-15}</span>
        </div>
        <div className="flex justify-between items-center bg-yellow-100 p-3 rounded-lg">
          <span className="text-yellow-700 font-medium">⏭️ Skipped</span>
          <span className="text-yellow-900 font-semibold">⏭️</span>
        </div>
      </div>

      {/* Performance Feedback */}
      <div className="mt-5 text-center">
        <p className="text-lg font-semibold text-gray-800">
          🎯 You scored <span className="text-blue-600">{score}</span> out of 15
        </p>
        <p className={`mt-2 text-sm font-medium ${score >= 10 ? "text-green-600" : "text-orange-600"}`}>
          {feedback}
        </p>
      </div>
    </div>
  );
};

export default RankStatus;
