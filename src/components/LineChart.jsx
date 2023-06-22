import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const customData = [
    {
      "id": "Kerala", "color": "#a4a9fc",
      "data": [
        { "x": "plane", "y": 212 },
        { "x": "agriculture", "y": 69 },
        { "x": "banking", "y": 270 },
        { "x": "industry", "y": 87 },
        { "x": "health", "y": 75 },
        { "x": "others", "y": 15 }
      ]
    },
    {
      "id": "Maharastra",
      "color": "#4cceac",
      "data": [
        { "x": "plane", "y": 101 }, { "x": "agriculture", "y": 75 }, { "x": "banking", "y": 36 }, { "x": "industry", "y": 216 }, { "x": "health", "y": 35 }, { "x": "others", "y": 14 }
      ]
    },
    {
      "id": "Tamil Nadu",
      "color": "#4cceac",
      "data": [
        { "x": "plane", "y": 98 }, { "x": "agriculture", "y": 26 }, { "x": "banking", "y": 36 }, { "x": "industry", "y": 75 }, { "x": "health", "y": 75 }, { "x": "others", "y": 54 }
      ]
    },
    {
      "id": "Uttar Pradesh", "color": "#a4a9fc",
      "data": [
        { "x": "plane", "y": 212 }, { "x": "agriculture", "y": 190 }, { "x": "banking", "y": 270 }, { "x": "industry", "y": 99 }, { "x": "health", "y": 75 }, { "x": "others", "y": 50 }
      ]
    },
  ]

  return (
    <ResponsiveLine
      data={customData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "sectors", // added
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // added
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count", // added
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
