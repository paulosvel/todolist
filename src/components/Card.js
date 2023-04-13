import { Box, Button } from "@mui/material";
import AddTodoForm from "./AddTodoForm";
import UpdateTodoForm from "./UpdateTodoForm";
import { useSelector, useDispatch } from "react-redux";
import SingleTodoCard from "./SingleTodoCard";
import { todoCleared } from "../store/features/todo/todoSlice";

const Card = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: "5px",
        width: "80%",
        height: "60%",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
        maxWidth: "600px",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <h1>Todo List</h1>

        <AddTodoForm />
        <UpdateTodoForm />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <SingleTodoCard name={todo.name} />
            </li>
          ))}
        </ul>
      </Box>
      <Button
      onClick={() => dispatch(todoCleared())}
        variant="contained"
        sx={{
          backgroundColor: "red",
          color: "white",
          marginBottom: "10px",
        }}
      >
        Clear
      </Button>
    </Box>
  );
};

export default Card;
