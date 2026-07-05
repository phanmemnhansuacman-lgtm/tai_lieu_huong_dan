import React from "react";

export default function Toolbar({ step, setStep }) {
  return (
    <div className="toolbar">

      <button
        className={step === 1 ? "active" : ""}
        onClick={() => setStep(1)}
      >
        Bước 1
      </button>

      <button
        className={step === 2 ? "active" : ""}
        onClick={() => setStep(2)}
      >
        Bước 2
      </button>

      <button
        className={step === 3 ? "active" : ""}
        onClick={() => setStep(3)}
      >
        Bước 3
      </button>

      <button onClick={() => setStep(99)}>
        Hiện tất cả
      </button>

      <button onClick={() => setStep(0)}>
        Reset
      </button>

    </div>
  );
}