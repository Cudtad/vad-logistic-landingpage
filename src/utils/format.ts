const truncateFractionAndFormat = (
  parts: Intl.NumberFormatPart[],
  digits: number
) => {
  let value = parts
    .map(({ type, value }) => {
      if (type !== "fraction" || !value || value.length < digits) {
        return value;
      }

      let retVal = "";
      for (
        let idx = 0, counter = 0;
        idx < value.length && counter < digits;
        idx++
      ) {
        if (value[idx] !== "0") {
          counter++;
        }
        retVal += value[idx];
      }
      return retVal;
    })
    .reduce((string, part) => string + part);
  return value;
};

export const formatNumber = (n?: number | string | bigint, digits = 2) => {
  if (!n) return "0";

  if (typeof n === "string") n = Number(n);

  const formatter = Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: 0,
  });
  return truncateFractionAndFormat(formatter.formatToParts(n), digits);
};
