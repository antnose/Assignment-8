import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ReactCharts = ({ ratings }) => {
  console.log(ratings);
  const chartData = ratings?.map((r) => ({
    name: r.name,
    count: r.count,
  }));
  return (
    <div className="w-full h-100  shadow rounded-2xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 40,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis type="number" tick={{ fontSize: 14 }} />
          <YAxis dataKey="name" type="category" tick={{ fontSize: 14 }} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="count"
            fill="orange"
            radius={[0, 8, 8, 0]}
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReactCharts;
