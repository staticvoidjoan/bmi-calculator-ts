import * as React from "react";
import "./Calculator.css";
const DEFAULT_WEIGHT: number = 50;
const DEFAULT_HEIGHT: number = 150;

export default function Calculator() {
  const [height, setHeight] = React.useState<number>(DEFAULT_HEIGHT);
  const [weight, setWeight] = React.useState<number>(DEFAULT_WEIGHT);
  const [bmiResult, setBmiResult] = React.useState<string>("");
  const onWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputWeight: number = parseInt(event.target.value);
    setWeight(inputWeight);
  };

  const onHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputHeight: number = parseInt(event.target.value);
    setHeight(inputHeight);
  };

  const bmi: number = React.useMemo(() => {
    const heightInMeters: number = height / 100;
    const bmi = Math.floor(weight / (heightInMeters * heightInMeters));
    if (bmi <= 19) {
      setBmiResult("You are underweight 🥺 Time to bulk up!");
    } else if (bmi > 19 && bmi < 25) {
      setBmiResult("Amazing, you are the perfect weight! 🎉!");
    } else if (bmi > 25 && bmi < 30) {
      setBmiResult("You are overweight eat some salad 🥗 ");
    } else {
      setBmiResult("Yo fatso, go workout! 🫠");
    }
    return bmi;
  }, [height, weight]);

  return (
    <div className="calculator-container">
      <h1 className="header">
        <strong className="typescript">TypeScript</strong> BMI Calculator
      </h1>
      <div className="weight-box">
        <p className="label">Weight: {weight} KG</p>
        <input
          className="range-input"
          type="range"
          onChange={onWeightChange}
          step={"1"}
          min={"30"}
          max={"150"}
          defaultValue={weight}
        />
      </div>
      <div className="height-box">
        <p className="label">Height: {height} CM</p>
        <input
          type="range"
          className="range-input"
          onChange={onHeightChange}
          step={"1"}
          min={"140"}
          max={"220"}
          defaultValue={height}
        />
      </div>
      <div className="calculator-footer">
        <p className="label">Your BMI is</p>
        <div className="result">
          <p>{bmi}</p>
          <p className="bmi-prompt">{bmiResult}</p>
        </div>
      </div>
    </div>
  );
}
