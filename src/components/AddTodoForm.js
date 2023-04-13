import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { todoAdded } from "../store/features/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useState } from "react";
const AddTodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(input)) {
      alert("Enter a todo");
      setInput("");
    } else {
      dispatch(
        todoAdded({
          id: nanoid(),
          name: input,
        })
      );
      setInput("");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="small"
          label="Add todo"
          variant="outlined"
          sx={{ marginRight: "5px" }}
        ></TextField>
        <Button type="submit" variant="contained" sx={{ width: "100px" }}>
          Add
        </Button>
      </form>
    </Box>
  );
};

export default AddTodoForm;
