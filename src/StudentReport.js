import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function StudentReport() {
  const data = [
    {
      name: "Foundation Literacy",
      score: 80,
      grade: "A",
    },
    {
      name: "Foundation Numeracy",
      score: 63,
      grade: "B",
    },
    {
      name: "Social and Emotional Learning",
      score: 25,
      grade: "D",
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>Student Report</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Foundation Literacy</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{data[0].grade}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Foundation Numeracy</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{data[1].grade}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Social and Emotional Learning</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{data[2].grade}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Classroom Behavior</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>A</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default StudentReport;
