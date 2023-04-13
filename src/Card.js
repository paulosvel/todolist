import { Box, Button } from "@mui/material";
const Card = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: "5px",
        width: "600px",
        height: "500px",
        flexDirection: "column",
        alignItems: "center",
        
        
      }}
    >
      <Box>
        <h1>Todo List</h1>
      </Box>
      <Button
        sx={{
          backgroundColor: "red",
          color: "white",
          marginBottom:"10px"
        }}
      >
        Clear
      </Button>
    </Box>
  );
};

export default Card;
