import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);



  const customData = [
    { "state": "Maharashtra", "agriculture": 137, "agricultureColor": "hsl(229, 70%, 50%)", "health": 96, "healthColor": "hsl(296, 70%, 50%)", "fish": 72, "fishColor": "hsl(97, 70%, 50%)", "bank": 140, "bankColor": "hsl(340, 70%, 50%)", 'industry': 12, 'industryColor': 'hsl(224, 70%, 50%)', 'others': 5, 'othersColor': 'hsl(274, 70%, 50%)' },
    { "state": "Uttar Pradesh", "agriculture": 132, "agricultureColor": "hsl(229, 70%, 50%)", "health": 12, "healthColor": "hsl(296, 70%, 50%)", "fish": 96, "fishColor": "hsl(97, 70%, 50%)", "bank": 75, "bankColor": "hsl(340, 70%, 50%)", 'industry': 140, 'industryColor': 'hsl(224, 70%, 50%)', 'others': 5, 'othersColor': 'hsl(274, 70%, 50%)' },
    { "state": "Haryana", "agriculture": 72, "agricultureColor": "hsl(229, 70%, 50%)", "health": 140, "healthColor": "hsl(296, 70%, 50%)", "fish": 27, "fishColor": "hsl(97, 70%, 50%)", "bank": 96, "bankColor": "hsl(340, 70%, 50%)", 'industry': 9, 'industryColor': 'hsl(224, 70%, 50%)', 'others': 8, 'othersColor': 'hsl(274, 70%, 50%)' },
    { "state": "Rajasthan", "agriculture": 12, "agricultureColor": "hsl(229, 70%, 50%)", "health": 72, "healthColor": "hsl(296, 70%, 50%)", "fish": 96, "fishColor": "hsl(97, 70%, 50%)", "bank": 140, "bankColor": "hsl(340, 70%, 50%)", 'industry': 130, 'industryColor': 'hsl(224, 70%, 50%)', 'others': 5, 'othersColor': 'hsl(274, 70%, 50%)' },
  ];

  return (
    <ResponsiveBar
      data={customData}
      theme={{
        // added
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
      }}

      keys={["agriculture", "health", "fish", "bank", "industry"]}

      indexBy="state"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "state", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in state: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
