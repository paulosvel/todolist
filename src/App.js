import "./App.css";
import { Box } from "@mui/material";
import Card from "./components/Card";
import AddTodoForm from "./components/AddTodoForm";




function App() {
  return (
    <>
      <Box sx={{}}>
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
        <Card/>
        </Box>
      </Box>
      
    </>
  );
}

export default App;
