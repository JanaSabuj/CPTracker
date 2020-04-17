export const epochCalculation = (start, end) => {
  const startDate = new Date(start + "Z");
  const startEpoch = startDate.getTime();

  const endDate = new Date(end + "Z");
  const endEpoch = endDate.getTime();

  const presentDate = new Date();
  const presentEpoch = presentDate.getTime();

  return {
    startEpoch,
    endEpoch,
    presentEpoch,
    startDate,
    endDate,
    presentDate
  };
};
