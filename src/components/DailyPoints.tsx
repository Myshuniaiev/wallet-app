import React from "react";
import { calculateDailyPoints } from "../utils/calculateDailyPoints";

const DailyPoints: React.FC = () => {
  const currentDay = new Date().getDate();
  const dailyPoints = calculateDailyPoints(currentDay);

  return (
    <div className="card daily-points">
      <p className="daily-points__title">Daily Points</p>
      <p className="daily-points__amount">{dailyPoints} Points</p>
    </div>
  );
};

export default DailyPoints;
