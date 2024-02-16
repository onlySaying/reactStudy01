import { Grid, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";

const AddTodo = (props) =>
{
    const [items, setItems] = useState({title: ""})
    return(
        <div>
            <Grid container style={{marginTop :20}}>
                <Grid xs={9} md ={9} siz item style={{paddingRight :5}}>
                <TextField placeholder="Add todo here"></TextField>
                </Grid>
                <Grid xs = {3} md = {3}>
                <Button fullWidth style={{height :60}}>+</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddTodo;