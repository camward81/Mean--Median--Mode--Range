"use strict";

const calcButton = document.querySelector(".btn");

calcButton.addEventListener("click", function () {
  // let arr = [];

  const calcMean = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] / arr.length;
    }
    return Math.round(sum * 100) / 100;
  };

  const calcMedian = function (arr) {
    arr.sort(function (a, b) {
      return a - b;
    });
    let value = 0;
    if (arr.length % 2 === 0) {
      value = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
      return value;
    } else {
      return arr[Math.round((arr.length - 1) / 2)];
    }
  };

  const calcMode = function (arr) {
    const frequencyTable = {};
    arr.forEach(
      (elem) => (frequencyTable[elem] = frequencyTable[elem] + 1 || 1)
    );

    let mode = [];
    let maxFrequency = 0;

    for (const key in frequencyTable) {
      if (frequencyTable[key] > maxFrequency) {
        mode = [Number(key)];
        maxFrequency = frequencyTable[key];
      } else if (frequencyTable[key] === maxFrequency) {
        mode.push(Number(key));
      }
    }
    if (mode.length === Object.keys(frequencyTable).length) mode = "no mode";
    return mode;
  };

  const calcRange = function (arr) {
    arr.sort(function (a, b) {
      return a - b;
    });
    let value = 0;
    value = arr[arr.length - 1] - arr[0];
    return value;
  };

  const numberList = document.querySelector(".list-input").value;
  console.log(numberList);

  const splitNum = numberList.split(",");
  console.log(splitNum);

  const newNumList = splitNum.map(Number);
  console.log(newNumList);

  const meanResult = calcMean(newNumList);
  console.log(calcMean(newNumList));
  document.querySelector(".mean-result").textContent = meanResult;

  const medianResult = calcMedian(newNumList);
  console.log(calcMedian(newNumList));
  document.querySelector(".median-result").textContent = medianResult;

  const modeResult = calcMode(newNumList);
  console.log(calcMode(newNumList));
  document.querySelector(".mode-result").textContent = modeResult;

  const rangeResult = calcRange(newNumList);
  console.log(calcRange(newNumList));
  document.querySelector(".range-result").textContent = rangeResult;
});
