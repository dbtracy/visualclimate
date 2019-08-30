const data = [];

const yearAverage = months => {
  let newObj = {};
  months.forEach(month => {
    let pdsi = month["PDSI"];
    const year = String(month.YearMonth).slice(0, 4);
    if (typeof pdsi !== "number") {
      if (pdsi.includes("-.")) {
        pdsi = pdsi.split("");
        pdsi.shift();
        pdsi.unshift("0");
        pdsi = pdsi.join("");
        pdsi = pdsi * -1;
      } else if (pdsi[0] === ".") {
        parseFloat(pdsi);
      }
    }
    if (!newObj[year]) newObj[year] = parseFloat(pdsi);
    else newObj[year] = newObj[year] + parseFloat(pdsi);
  });
  for (let year in newObj) {
    newObj[year] = (newObj[year] / 12).toFixed(2);
  }
  return newObj;
};

console.log(yearAverage(data));
