function repeatPigs(nTimes) {
  if (nTimes < 0) {
    throw new RangeError("number has to be positive");
  }

  if (typeof nTimes !== "number") {
    throw new TypeError("you have to provide a number of repetitions");
  }

  return "🐖".repeat(nTimes);
}
