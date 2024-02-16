import { Checkbox, InputBase, ListItemText } from "@mui/material";
import { Button } from "@mui/material";
function todo({item})
{
    return(
        <div>
            <ListItemText >
                <Checkbox></Checkbox>
                <InputBase 
                value ={item.title} 
                inputProps={{"aira-label" : "naked"}}
                id = {item.id}
                name = {item.id}
                fullWidth = {true}
                />
                <Button>-</Button>
            </ListItemText>
           
        </div>
    )
}

export default todo;