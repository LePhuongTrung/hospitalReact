import { forwardRef } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Recharts = forwardRef((props, ref) => {
  const { data } = props;

  return (
    <LineChart width={600} height={300} data={data}>
      <Line
        type="monotone"
        dataKey="internalDiseases"
        stroke="#2196F3"
        strokeWidth={3}
      />
      <Line
        type="monotone"
        dataKey="surgicalDiseases"
        stroke="#F44236"
        strokeWidth={3}
      />
      <Line
        type="monotone"
        dataKey="obstetrics"
        stroke="#FFCA29"
        strokeWidth={3}
      />
      <Line
        type="monotone"
        dataKey="emergency"
        stroke="#0d1117"
        strokeWidth={3}
      />
      <Line
        type="monotone"
        dataKey="Infectious"
        stroke="#44cc11"
        strokeWidth={3}
      />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
});

export default Recharts;
