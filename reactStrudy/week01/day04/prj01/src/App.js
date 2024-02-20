import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

const AddTodo = (props)=>{
    const [item, setItem] = useState({title: ""});

    const onInputChange = (e)=>{
        setItem({title: e.target.value});
        console.log(item);
    }

    return (<div>
        <Grid container style={{marginTop:20}}>
            <Grid xs={10} md={10} item style={{paddingRight:5}}>
                <TextField onChange={onInputChange} placeholder="Add Todo here" fullWidth></TextField>
            </Grid>
            <Grid xs={2} md={2}>
                <Button fullWidth style={{height: '100%'}} color="secondary" variant="outlined">+</Button>
            </Grid>
        </Grid>
    </div>);
}

export default AddTodo;