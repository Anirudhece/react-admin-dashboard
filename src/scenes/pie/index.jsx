import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Count of each Sector type in India" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
