import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


const PieRechartComponent = () => {
  const COLORS = ["orange", "#82ca9d", "white"];
  const pieData = [
    {
      name: "Reserved",
      value: 14.85,
    },
    {
      name: "Barrowed",
      value: 47.91,
    },
    {
      name: "Available",
      value: 16.85,
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };

  return (
 
      <div  data-aos="fade-up" className="dark-background" >
      <h5 style={{padding:"4px 0 0 10px" ,textAlign:'start',color:'white'}} >Book Status</h5>
        <PieChart width={570} height={400} backgroundColor="black">

       
          <Pie
            data={pieData}
            color="#000000 "
            dataKey="value"
            nameKey="name"
            cx="60%"
            cy="50%"
            outerRadius={130}
            fill="#8884d8"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            layout="vertical" // Display the legend vertically
            verticalAlign="top" // Position the legend at the top
            align="right"
            contentMargin={{ top: 20 }}  // Align the legend to the right
          />
        </PieChart>
      </div>
   
  );
};

export default PieRechartComponent;
