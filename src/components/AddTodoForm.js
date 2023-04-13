import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

const AddTodoForm = () => {
    return (
        <Box sx={{display:"flex", flexDirection:"row",}}>
            
            <TextField size="small" label="Add todo" variant="outlined" sx={{marginRight:"5px"}}></TextField>
            <Button variant="contained"  sx={{width:"100px",}}>Add</Button>
        </Box>
    );
}

export default AddTodoForm;