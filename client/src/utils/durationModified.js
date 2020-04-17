export const durationModified = duration => {
  let total = Math.round((duration / 3600 + Number.EPSILON) * 100) / 100;
  if (total > 24)
    total = ` ${Math.round((total / 24 + Number.EPSILON) * 100) / 100} Days`;
  else total = total + " Hour" + (total > 1 ? "s" : "");
  return total;
};
