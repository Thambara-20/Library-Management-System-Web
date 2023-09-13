import React from "react";

const TestResults = ({ results }) => {
  return (
    <div>
      <h2>Test Results</h2>
      <div>
        <h3>Mobile View</h3>
        <ul>
          {results.mobile.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Tablet View</h3>
        <ul>
          {results.tablet.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Desktop View</h3>
        <ul>
          {results.desktop.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestResults;
