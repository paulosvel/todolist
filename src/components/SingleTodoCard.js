import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import EditIcon from "@mui/icons-material/Edit";
const SingleTodoCard = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          
        }}
      >
        <span style={{ fontFamily: "Fantasy" }}>{props.name}</span>

        <Box sx={{}}>
          <CheckBoxIcon sx={{marginLeft:"10px"}}></CheckBoxIcon>
          <EditIcon sx={{marginLeft:"10px"}}></EditIcon>
          <DeleteIcon sx={{marginLeft:"10px"}}> </DeleteIcon>
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
