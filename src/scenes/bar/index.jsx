import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="example bar chart depicting count of each sector in ecah state" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
