"use client";

import {
  LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie,
  ScatterChart, Scatter, RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell, ComposedChart
} from 'recharts';
import { TrendingUp, BarChart3, Activity, PieChart as PieIcon,
  Layers, Sparkles, Target, Radar as RadarIcon, Grid3x3,
  CandlestickChart, Filter, Grid, GitBranch, Gauge, TrendingDown
} from 'lucide-react';

// Data generators
const timeSeriesData = [
  { month: 'Jan', revenue: 4500, expenses: 3200, profit: 1300 },
  { month: 'Feb', revenue: 5200, expenses: 3400, profit: 1800 },
  { month: 'Mar', revenue: 4800, expenses: 3600, profit: 1200 },
  { month: 'Apr', revenue: 6100, expenses: 3800, profit: 2300 },
  { month: 'May', revenue: 7200, expenses: 4200, profit: 3000 },
  { month: 'Jun', revenue: 8100, expenses: 4500, profit: 3600 },
];

const categoryData = [
  { category: 'Electronics', sales: 89000 },
  { category: 'Clothing', sales: 72000 },
  { category: 'Home', sales: 65000 },
  { category: 'Sports', sales: 54000 },
  { category: 'Books', sales: 43000 },
];

const pieData = [
  { name: 'Desktop', value: 45, color: '#8B5CF6' },
  { name: 'Mobile', value: 35, color: '#EC4899' },
  { name: 'Tablet', value: 15, color: '#14B8A6' },
  { name: 'Other', value: 5, color: '#F59E0B' },
];

const scatterData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
  { x: 180, y: 350, z: 450 },
  { x: 130, y: 180, z: 300 },
];

const radarData = [
  { subject: 'Speed', A: 120, B: 110, fullMark: 150 },
  { subject: 'Quality', A: 98, B: 130, fullMark: 150 },
  { subject: 'Cost', A: 86, B: 130, fullMark: 150 },
  { subject: 'Support', A: 99, B: 100, fullMark: 150 },
  { subject: 'Features', A: 85, B: 90, fullMark: 150 },
  { subject: 'UX', A: 115, B: 95, fullMark: 150 },
];

const heatmapData = [
  { hour: '00:00', Mon: 10, Tue: 20, Wed: 15, Thu: 25, Fri: 30, Sat: 45, Sun: 40 },
  { hour: '04:00', Mon: 5, Tue: 8, Wed: 6, Thu: 10, Fri: 15, Sat: 25, Sun: 20 },
  { hour: '08:00', Mon: 45, Tue: 50, Wed: 48, Thu: 55, Fri: 60, Sat: 30, Sun: 25 },
  { hour: '12:00', Mon: 70, Tue: 75, Wed: 72, Thu: 78, Fri: 80, Sat: 65, Sun: 60 },
  { hour: '16:00', Mon: 60, Tue: 65, Wed: 63, Thu: 68, Fri: 72, Sat: 70, Sun: 65 },
  { hour: '20:00', Mon: 40, Tue: 45, Wed: 42, Thu: 48, Fri: 55, Sat: 75, Sun: 70 },
];

const candlestickData = [
  { day: 'Mon', open: 100, close: 120, high: 125, low: 95 },
  { day: 'Tue', open: 120, close: 110, high: 130, low: 105 },
  { day: 'Wed', open: 110, close: 135, high: 140, low: 108 },
  { day: 'Thu', open: 135, close: 130, high: 145, low: 128 },
  { day: 'Fri', open: 130, close: 150, high: 155, low: 128 },
];

const funnelData = [
  { stage: 'Visitors', value: 10000 },
  { stage: 'Signups', value: 5000 },
  { stage: 'Active', value: 2500 },
  { stage: 'Paid', value: 1000 },
  { stage: 'Premium', value: 300 },
];

const treemapData = [
  { name: 'Category A', size: 400, color: '#8B5CF6' },
  { name: 'Category B', size: 300, color: '#EC4899' },
  { name: 'Category C', size: 200, color: '#14B8A6' },
  { name: 'Category D', size: 150, color: '#F59E0B' },
  { name: 'Category E', size: 100, color: '#3B82F6' },
];

const waterfallData = [
  { category: 'Starting', value: 100, type: 'start' },
  { category: 'Sales', value: 150, type: 'increase' },
  { category: 'Marketing', value: -30, type: 'decrease' },
  { category: 'Operations', value: -20, type: 'decrease' },
  { category: 'Support', value: 40, type: 'increase' },
  { category: 'Total', value: 240, type: 'end' },
];

const ChartCard = ({ title, icon: Icon, children }: any) => (
  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-purple-500/10">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <div className="h-[300px]">
      {children}
    </div>
  </div>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-600 rounded-lg p-3 shadow-xl">
        <p className="text-slate-300 text-sm font-medium mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const DonutChart = () => {
  const innerRadius = 60;
  const outerRadius = 100;
  const total = pieData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={2}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="text-3xl font-bold text-white">{total}%</div>
          <div className="text-sm text-slate-400">Total</div>
        </div>
      </div>
    </div>
  );
};

const HeatmapChart = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const maxValue = 80;

  return (
    <div className="space-y-2">
      {heatmapData.map((row, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-xs text-slate-400 w-12">{row.hour}</span>
          <div className="flex gap-1 flex-1">
            {days.map((day) => {
              const value = row[day as keyof typeof row] as number;
              const intensity = (value / maxValue) * 100;
              const color = intensity > 66 ? 'bg-purple-500' : intensity > 33 ? 'bg-pink-500' : 'bg-teal-500';
              const opacity = Math.max(20, intensity);

              return (
                <div
                  key={day}
                  className={`flex-1 h-8 rounded ${color} transition-all hover:scale-110`}
                  style={{ opacity: opacity / 100 }}
                  title={`${day} ${row.hour}: ${value}`}
                />
              );
            })}
          </div>
        </div>
      ))}
      <div className="flex justify-center gap-8 mt-4">
        {days.map((day) => (
          <span key={day} className="text-xs text-slate-400">{day}</span>
        ))}
      </div>
    </div>
  );
};

const CandlestickChartComponent = () => (
  <ResponsiveContainer width="100%" height={300}>
    <ComposedChart data={candlestickData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
      <XAxis dataKey="day" stroke="#94a3b8" />
      <YAxis stroke="#94a3b8" />
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey="high" fill="#14B8A6" opacity={0.3} />
      <Bar dataKey="low" fill="#EC4899" opacity={0.3} />
      <Line type="monotone" dataKey="open" stroke="#8B5CF6" strokeWidth={2} />
      <Line type="monotone" dataKey="close" stroke="#F59E0B" strokeWidth={2} />
    </ComposedChart>
  </ResponsiveContainer>
);

const FunnelChartComponent = () => {
  const maxValue = Math.max(...funnelData.map(d => d.value));

  return (
    <div className="space-y-2 py-8">
      {funnelData.map((item, index) => {
        const width = (item.value / maxValue) * 100;
        const colors = ['#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE', '#EDE9FE'];

        return (
          <div key={index} className="flex flex-col items-center">
            <div
              className="h-12 rounded-lg flex items-center justify-center text-white font-medium transition-all hover:scale-105"
              style={{
                width: `${width}%`,
                backgroundColor: colors[index],
              }}
            >
              <span className="text-sm">{item.stage}: {item.value.toLocaleString()}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const TreemapComponent = () => {
  const total = treemapData.reduce((sum, item) => sum + item.size, 0);

  return (
    <div className="h-full grid grid-cols-3 grid-rows-2 gap-2">
      {treemapData.map((item, index) => {
        const percentage = ((item.size / total) * 100).toFixed(1);
        const gridClass = index === 0 ? 'col-span-2 row-span-2' : '';

        return (
          <div
            key={index}
            className={`${gridClass} rounded-lg p-4 flex flex-col justify-center items-center transition-all hover:scale-105 cursor-pointer`}
            style={{ backgroundColor: item.color }}
          >
            <div className="text-white font-bold text-lg">{item.name}</div>
            <div className="text-white/80 text-sm">{percentage}%</div>
            <div className="text-white/60 text-xs">{item.size}</div>
          </div>
        );
      })}
    </div>
  );
};

const SankeyDiagram = () => (
  <div className="h-full flex items-center justify-center">
    <svg width="100%" height="280" viewBox="0 0 600 280">
      {/* Source nodes */}
      <rect x="20" y="20" width="80" height="60" fill="#8B5CF6" rx="8" />
      <text x="60" y="55" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">Source A</text>

      <rect x="20" y="100" width="80" height="60" fill="#EC4899" rx="8" />
      <text x="60" y="135" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">Source B</text>

      <rect x="20" y="180" width="80" height="60" fill="#14B8A6" rx="8" />
      <text x="60" y="215" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">Source C</text>

      {/* Middle nodes */}
      <rect x="260" y="50" width="80" height="80" fill="#F59E0B" rx="8" />
      <text x="300" y="95" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">Middle 1</text>

      <rect x="260" y="150" width="80" height="80" fill="#3B82F6" rx="8" />
      <text x="300" y="195" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">Middle 2</text>

      {/* Target node */}
      <rect x="500" y="90" width="80" height="100" fill="#10B981" rx="8" />
      <text x="540" y="145" fill="white" textAnchor="middle" fontSize="14" fontWeight="bold">Target</text>

      {/* Flow paths */}
      <path d="M 100 50 Q 180 50 260 90" fill="none" stroke="#8B5CF6" strokeWidth="20" opacity="0.5" />
      <path d="M 100 130 Q 180 130 260 90" fill="none" stroke="#EC4899" strokeWidth="15" opacity="0.5" />
      <path d="M 100 210 Q 180 210 260 190" fill="none" stroke="#14B8A6" strokeWidth="25" opacity="0.5" />

      <path d="M 340 90 Q 420 90 500 140" fill="none" stroke="#F59E0B" strokeWidth="25" opacity="0.5" />
      <path d="M 340 190 Q 420 190 500 140" fill="none" stroke="#3B82F6" strokeWidth="20" opacity="0.5" />
    </svg>
  </div>
);

const GaugeChartComponent = () => {
  const value = 75;
  const startAngle = 180;
  const endAngle = 0;
  const angle = startAngle + (endAngle - startAngle) * (value / 100);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="relative w-64 h-32">
        <svg width="256" height="128" viewBox="0 0 256 128">
          {/* Background arc */}
          <path
            d="M 28 128 A 100 100 0 0 1 228 128"
            fill="none"
            stroke="#334155"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Colored segments */}
          <path
            d="M 28 128 A 100 100 0 0 1 78 43"
            fill="none"
            stroke="#14B8A6"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <path
            d="M 78 43 A 100 100 0 0 1 178 43"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <path
            d="M 178 43 A 100 100 0 0 1 228 128"
            fill="none"
            stroke="#EC4899"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Needle */}
          <line
            x1="128"
            y1="128"
            x2={128 + 90 * Math.cos((angle * Math.PI) / 180)}
            y2={128 + 90 * Math.sin((angle * Math.PI) / 180)}
            stroke="#8B5CF6"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="128" cy="128" r="8" fill="#8B5CF6" />
        </svg>
      </div>
      <div className="text-center mt-4">
        <div className="text-4xl font-bold text-white">{value}%</div>
        <div className="text-sm text-slate-400 mt-1">Performance Score</div>
      </div>
    </div>
  );
};

const WaterfallChartComponent = () => {
  let cumulative = 0;
  const chartData = waterfallData.map((item, index) => {
    const start = cumulative;
    if (item.type === 'start' || item.type === 'end') {
      cumulative = item.value;
      return { ...item, start: 0, end: item.value };
    } else {
      cumulative += item.value;
      return { ...item, start, end: cumulative };
    }
  });

  return (
    <div className="h-full flex items-end justify-around gap-2 px-4 pb-8">
      {chartData.map((item, index) => {
        const height = Math.abs(item.value);
        const maxHeight = 240;
        const barHeight = (height / maxHeight) * 200;
        const colors = {
          start: '#8B5CF6',
          increase: '#14B8A6',
          decrease: '#EC4899',
          end: '#F59E0B'
        };

        return (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className="w-full rounded-lg transition-all hover:scale-105"
              style={{
                height: `${barHeight}px`,
                backgroundColor: colors[item.type as keyof typeof colors],
              }}
            />
            <div className="text-xs text-white mt-2 font-medium">{item.value > 0 ? '+' : ''}{item.value}</div>
            <div className="text-xs text-slate-400 mt-1">{item.category}</div>
          </div>
        );
      })}
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent mb-4">
            Chart Visualization Showcase
          </h1>
          <p className="text-slate-400 text-lg">
            15 stunning chart types with modern design and vibrant colors
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Line Chart */}
          <ChartCard title="Line Chart - Time Series" icon={TrendingUp}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ color: '#94a3b8' }} />
                <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={3} dot={{ fill: '#8B5CF6', r: 4 }} />
                <Line type="monotone" dataKey="expenses" stroke="#EC4899" strokeWidth={3} dot={{ fill: '#EC4899', r: 4 }} />
                <Line type="monotone" dataKey="profit" stroke="#14B8A6" strokeWidth={3} dot={{ fill: '#14B8A6', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Bar Chart */}
          <ChartCard title="Bar Chart - Comparison" icon={BarChart3}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="category" stroke="#94a3b8" angle={-15} textAnchor="end" height={80} />
                <YAxis stroke="#94a3b8" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="sales" fill="#8B5CF6" radius={[8, 8, 0, 0]}>
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8B5CF6', '#EC4899', '#14B8A6', '#F59E0B', '#3B82F6'][index]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Area Chart */}
          <ChartCard title="Area Chart - Volume" icon={Activity}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timeSeriesData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EC4899" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#EC4899" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="revenue" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorRevenue)" />
                <Area type="monotone" dataKey="expenses" stroke="#EC4899" fillOpacity={1} fill="url(#colorExpenses)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Pie Chart */}
          <ChartCard title="Pie Chart - Distribution" icon={PieIcon}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Donut Chart */}
          <ChartCard title="Donut Chart - Center Info" icon={Layers}>
            <DonutChart />
          </ChartCard>

          {/* Scatter Plot */}
          <ChartCard title="Scatter Plot - Correlation" icon={Sparkles}>
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="x" stroke="#94a3b8" name="X Value" />
                <YAxis dataKey="y" stroke="#94a3b8" name="Y Value" />
                <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Data Points" data={scatterData} fill="#8B5CF6">
                  {scatterData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8B5CF6', '#EC4899', '#14B8A6', '#F59E0B', '#3B82F6'][index % 5]} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Bubble Chart */}
          <ChartCard title="Bubble Chart - Multi-dimensional" icon={Target}>
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="x" stroke="#94a3b8" />
                <YAxis dataKey="y" stroke="#94a3b8" />
                <Tooltip content={<CustomTooltip />} />
                <Scatter name="Bubbles" data={scatterData} fill="#8B5CF6">
                  {scatterData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={['#8B5CF6', '#EC4899', '#14B8A6', '#F59E0B', '#3B82F6'][index % 5]}
                    />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Radar Chart */}
          <ChartCard title="Radar Chart - Multi-variable" icon={RadarIcon}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" stroke="#94a3b8" />
                <PolarRadiusAxis stroke="#94a3b8" />
                <Tooltip content={<CustomTooltip />} />
                <Radar name="Product A" dataKey="A" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.5} />
                <Radar name="Product B" dataKey="B" stroke="#EC4899" fill="#EC4899" fillOpacity={0.5} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Heatmap */}
          <ChartCard title="Heatmap - Intensity Matrix" icon={Grid3x3}>
            <HeatmapChart />
          </ChartCard>

          {/* Candlestick */}
          <ChartCard title="Candlestick - Financial Data" icon={CandlestickChart}>
            <CandlestickChartComponent />
          </ChartCard>

          {/* Funnel Chart */}
          <ChartCard title="Funnel Chart - Conversion Flow" icon={Filter}>
            <FunnelChartComponent />
          </ChartCard>

          {/* Treemap */}
          <ChartCard title="Treemap - Hierarchical Data" icon={Grid}>
            <TreemapComponent />
          </ChartCard>

          {/* Sankey Diagram */}
          <ChartCard title="Sankey - Flow Visualization" icon={GitBranch}>
            <SankeyDiagram />
          </ChartCard>

          {/* Gauge Chart */}
          <ChartCard title="Gauge Chart - Metric Display" icon={Gauge}>
            <GaugeChartComponent />
          </ChartCard>

          {/* Waterfall Chart */}
          <ChartCard title="Waterfall - Sequential Changes" icon={TrendingDown}>
            <WaterfallChartComponent />
          </ChartCard>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-slate-400 text-sm">
          <p>Built with Next.js, Recharts, and Tailwind CSS</p>
        </div>
      </div>
    </main>
  );
}
