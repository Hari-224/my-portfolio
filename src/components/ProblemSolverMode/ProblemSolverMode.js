import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import './ProblemSolverMode.css';

const initialArray = [64, 34, 25, 12, 22, 11, 90];

const ProblemSolverMode = () => {
  const [isActive, setIsActive] = useState(false);
  const [algorithm, setAlgorithm] = useState('bubble');
  const [array, setArray] = useState(initialArray);
  const [step, setStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const runVisualization = () => {
    setIsRunning(true);
    setStep(0);
    const timer = setInterval(() => {
      setStep(prev => {
        if (prev >= array.length - 1) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
  };

  if (!isActive)
    return (
      <button className="solver-toggle" onClick={() => setIsActive(true)}>
        <Play size={20} /> Problem Solver
      </button>
    );

  return (
    <div className="solver-modal">
      <div className="solver-header">
        <h3>Algorithm Visualizer</h3>
        <button onClick={() => setIsActive(false)}><X size={20}/></button>
      </div>
      <div className="solver-body">
        <label>Select Algorithm:</label>
        <select value={algorithm} onChange={e => setAlgorithm(e.target.value)}>
          <option value="bubble">Bubble Sort</option>
          <option value="quick">Quick Sort</option>
          <option value="merge">Merge Sort</option>
        </select>
        <h4>Array Visualization</h4>
        <div className="solver-visual">
          {array.map((value, i) => (
            <div key={i} className={`solver-bar ${i === step ? 'active' : ''}`} style={{height: `${value * 2}px`}}>{value}</div>
          ))}
        </div>
        <button disabled={isRunning} onClick={runVisualization}>
          {isRunning ? <>Running...</> : <><Play size={16}/> Start Visualization</>}
        </button>
        <div className="solver-info">
          {algorithm === 'bubble' && 'Time Complexity: O(n²), Space Complexity: O(1)'}
          {algorithm === 'quick' && 'Time Complexity: O(n log n), Space Complexity: O(log n)'}
          {algorithm === 'merge' && 'Time Complexity: O(n log n), Space Complexity: O(n)'}
        </div>
      </div>
    </div>
  );
};

export default ProblemSolverMode;
