import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { todoDeleted } from "../store/features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { toggleInputForm } from "../store/features/todo/todoSlice";


const SingleTodoCard = (props) => {
    const [done, setDone] = useState(false);
    const dispatch = useDispatch();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          
        }}
      >
<span className={done ? "" : "font-bold"} style={{ fontFamily: "", textDecoration: done ? "line-through" : "none" }}>{props.name}</span>

        <Box sx={{}}>
          <CheckBoxIcon onClick={()=> setDone(!done)} sx={{marginLeft:"10px", cursor:"pointer"}}></CheckBoxIcon>
          <EditIcon onClick={()=>dispatch(toggleInputForm())} sx={{marginLeft:"10px",cursor:"pointer"}}></EditIcon>
          <DeleteIcon onClick={()=>dispatch(todoDeleted(props.id))} sx={{marginLeft:"10px", cursor:"pointer"}}> </DeleteIcon>
        </Box>
      </Box>
    </>
  );
};

export default SingleTodoCard;

// const SingleTodoCard = (props) => {
//   const [toggleComplete, setToggleComplete] = useState(false);
//   const dispatch = useDispatch();
//   // const toggleComplete = useSelector((state) => state.todos.toggleComplete);

//   return (
//     <div className="flex justify-between bg-red-100 py-2 rounded shadow">
//       <div className="px-4">
//         <h1
//           className={
//             toggleComplete ? "font-semibold line-through" : "font-semibold"
//           }
//         >
//           {props.title}
//         </h1>
//       </div>
//       <div className="px-4 flex space-x-4">
//         <BsCheckSquare
//           onClick={() => setToggleComplete(!toggleComplete)}
//           className="cursor-pointer text-green-700"
//           size={20}
//         />
//         <FaEdit
//           onClick={() =>
//             dispatch(formToggled({ id: props.id, title: props.title }))
//           }
//           className="cursor-pointer text-yellow-700"
//           size={20}
//         />
//         <BsTrashFill
//           onClick={() => dispatch(todoDeleted(props.id))}
//           className="cursor-pointer text-red-700"
//           size={20}
//         />
//       </div>
//     </div>
//   );
// };

// export default SingleTodoCard;
