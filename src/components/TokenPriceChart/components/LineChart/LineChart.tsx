import {
  Line,
  LineChart as RechartsLineChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export interface LineChartProps {
  chartData: { name: string }[];
  chartKeys: string[];
}

export const LineChart = ({ chartData, chartKeys }: LineChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        width={500}
        height={300}
        data={chartData}
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
        {chartKeys.map((chartKey: any) => (
          <Line
            dataKey={chartKey}
            key={chartKey}
            stroke="#8884d8"
            type="monotone"
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};
