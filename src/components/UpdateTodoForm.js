import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

const UpdateTodoForm = () => {
    return (
        <Box sx={{display:"flex", flexDirection:"row",marginTop:"5px",}}>
            
            <TextField size="small" label="Add todo" variant="outlined" sx={{marginRight:"5px"}}></TextField>
            <Button variant="contained"  sx={{width:"100px", backgroundColor:"orange"}}>Update</Button>
        </Box>
    );
}

export default UpdateTodoForm;