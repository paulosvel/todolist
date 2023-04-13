import { Box, Button } from "@mui/material";
import AddTodoForm from "./AddTodoForm";
const Card = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: "5px",
        width: "80%",
        height:"60%",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
        maxWidth:"600px",
        
        
      }}
    >
      <Box sx={{textAlign:"center"}}>
        <h1>Todo List</h1>
      
      <AddTodoForm />
      </Box>
      <Button
      variant="contained"
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
