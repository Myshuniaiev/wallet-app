export function calculateDailyPoints(dayOfSeason: number): string {
  let points = 0;

  if (dayOfSeason === 1) {
    points = 2;
  } else if (dayOfSeason === 2) {
    points = 3;
  } else {
    const prevDayPoints = 3;
    const dayBeforePrevPoints = 2;
    points = prevDayPoints + dayBeforePrevPoints * 0.6;
  }

  const roundedPoints = Math.round(points);

  if (roundedPoints > 1000) {
    return `${Math.floor(roundedPoints / 1000)}K`;
  }

  return roundedPoints.toString();
}
