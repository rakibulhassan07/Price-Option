
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const Subjects=[
        {name: "Alice", math: 85, physics_mark: 78},
        {name: "Bob", math: 70, physics_mark: 65},
        {name: "Charlie", math: 92,physics_mark: 88},
        {name: "David", math: 78, physics_mark: 72},
        {name: "Eve", math: 63, physics_mark: 60},
        {name: "Frank", math: 88,physics_mark: 82},
        {name: "Grace",math: 75, physics_mark: 68},
        {name: "Henry", math: 82, physics_mark: 77},
        {name: "Ivy", math: 90, physics_mark: 85},
        {name: "Jack", math: 67, physics_mark: 70}
      ]
      
    return (
        <div>
            <LChart  width={800} height={400} data={Subjects}>
                <YAxis></YAxis>
                <XAxis dataKey={'name'}></XAxis>
                 <Line dataKey={'math'} stroke='red'></Line>
                 <Line dataKey={'physics_mark'} stroke='yellow'></Line>
            </LChart>
           
        </div>
    );
};

export default LineChart;