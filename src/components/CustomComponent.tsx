import {  Box, Button, Card, FormControl, Grid, MenuItem, Select, Switch, TextField, Typography } from '@mui/material'
import React, {  useState } from "react";
import { useForm, useFieldArray } from 'react-hook-form';
// import AddIcon from "@mui/icons-material/Add";
import fieldTypeOptions from './FieldTypeOptions';
import DeleteIcon from "@mui/icons-material/Delete";




function CustomComponent() {

    const [required, setRequired] = useState(false);
    const [fieldType, setFieldType] = useState("");
    const [open, setOpen] = React.useState(false);


    const {
        register,
        formState: { errors },
        handleSubmit,
        // setValue,
        // getValues,
        // unregister,
        control,
    } = useForm();

    const { append, fields, remove } = useFieldArray({
        control,
        name: "options"
    });

    const addCustomComponent = (data: any) => {
        const finalData = {
            ...data, fieldType : fieldType
        }
        console.log(finalData);
    }

    const handleChange = (event: any) => {
        setFieldType(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <Card sx={{ minWidth: 275 }}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box
                        sx={{
                            pt: 1,
                            position: "relative",
                            textAlign: "center",
                            paddingBottom: "40px",
                            marginTop: "80px",
                            "& .MuiTextField-root": { m: 1 },
                            "& .MuiTypography-root": { pl: 1 },
                            "& .MuiSelect-root": { m: 1 },
                            "& .MuiButton-root": { m: 1 },
                            "& .MuiRadio-root": { pl: 2 },
                            "& .MuiTable-root": { m: 2 },
                        }}
                    >
                        <Grid container spacing={2} pt={3} direction="row">
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    component="span"
                                    sx={{ pl: 1 }}
                                >
                                    Custom Component
                                </Typography>
                            </Grid>
                        </Grid>
                        <form onSubmit={handleSubmit(addCustomComponent)}>
                            <Grid container spacing={2} pt={3} direction="row">
                                <Grid item xs={12} md={3}>
                                    <Typography variant="h6" gutterBottom component="span">
                                        Field Name
                                    </Typography>

                                    <TextField
                                        size="small"
                                        fullWidth
                                        label="Field Name"
                                        placeholder="Field Name"
                                        {...register("fieldName",
                                            {
                                                required: true,
                                            })}
                                    />
                                    <Typography variant="caption" color="red">
                                        {errors.fieldName && "Field Name is required*"}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Typography variant="h6" gutterBottom component="span">
                                        Field Type
                                    </Typography>

                                    {/* <Autocomplete
                                        id="field-type"
                                        size="small"
                                        options={fieldTypeOptions}
                                        disablePortal
                                        getOptionLabel={(option: any) => option.label || ""}
                                        renderInput={(params) => (
                                            <TextField {...params} placeholder="Select type" />
                                        )}
                                        onChange={(e: any, value: any) => {
                                            if (value !== null) {
                                                // changeFieldType(value);
                                                console.log(value);
                                            }
                                        }}
                                    /> */}
                                    <FormControl fullWidth size="small" >
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={fieldType}
                                            // label="fieldType"
                                            open={open}
                                            onClose={handleClose}
                                            onOpen={handleOpen}
                                            onChange={handleChange}
                                            placeholder="Select Field Type "

                                        >
                                            {
                                                fieldTypeOptions.map((option) => {
                                                    return <MenuItem value={option.value}>{option.label}</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Typography variant="h6" gutterBottom component="span">
                                        Place Holder
                                    </Typography>

                                    <TextField
                                        size="small"
                                        fullWidth
                                        placeholder="Field Placeholder"
                                        label="Placeholder"
                                        {...register("placeholder",
                                            {
                                                required: true,
                                            })}
                                    />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Is Required
                                    </Typography>

                                    <Switch
                                        checked={required}
                                        {...register("isRequired")}
                                        onChange={(e) => setRequired(e.target.checked)}
                                        inputProps={{ "aria-label": "controlled" }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    {fieldType === "checkBox" ||
                                        fieldType === "radio" ||
                                        fieldType === "select" ? (
                                        <>

                                            {
                                                fields.map((item, index) => {
                                                    return (
                                                    <Grid key={index} item xs={12} md={6} >

                                                        <Grid container spacing={2} >

                                                            <Box
                                                                sx={{
                                                                    pt: 1,
                                                                    position: "relative",
                                                                    textAlign: "left",
                                                                    paddingBottom: "40px",
                                                                    marginLeft: "20px",
                                                                    "& .MuiTextField-root": { m: 1 },
                                                                    "& .MuiTypography-root": { pl: 1 },
                                                                    "& .MuiSelect-root": { m: 1 },
                                                                    "& .MuiButton-root": { m: 1 },
                                                                    "& .MuiRadio-root": { pl: 2 },
                                                                    "& .MuiTable-root": { m: 2 },
                                                                }}
                                                            >
                                                                <Typography
                                                                    variant="h6"
                                                                    gutterBottom
                                                                    component="div"
                                                                >
                                                                    Option {index + 1}
                                                                </Typography>

                                                                <Grid container spacing={2} direction="row">
                                                                    <Grid item xs={12} md={4}>
                                                                        <TextField
                                                                            // id={`${fieldName}.key`}
                                                                            size="small"
                                                                            fullWidth
                                                                            placeholder="Key"
                                                                            label="Key"
                                                                            {...register(`options[${index}].key`)}
                                                                            // defaultValue={item.key}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={12} md={4}>
                                                                        <TextField
                                                                            // id={`${fieldName}.value`}
                                                                            size="small"
                                                                            fullWidth
                                                                            placeholder="value"
                                                                            label="value"
                                                                            {...register(`options[${index}].value`)}
                                                                            // defaultValue={item.value}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={12} md={2}>
                                                                        <Button
                                                                            variant="outlined"
                                                                            size="small"
                                                                        onClick={() => remove(index)}
                                                                        // disabled={isVisible}
                                                                        >
                                                                            <DeleteIcon />
                                                                        </Button>
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>


                                                        </Grid>
                                                        {/* <Typography variant="caption" color="red">
                                                {errors.options && "options are required*"}
                                            </Typography> */}
                                                    </Grid>
                                                    )
                                                })
                                            }

                                            <Grid item xs={5} textAlign="left" margin="5px">
                                                <Button variant="contained" onClick={() => append({
                                                    key:"", value:""
                                                })}>
                                                    Add Option
                                                </Button>
                                            </Grid>

                                        </>
                                    ) : (
                                        ""
                                    )}
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <div>
                                        <Button variant="contained" size="medium" type="submit">
                                            Submit
                                        </Button>

                                    </div>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    )
}

export default CustomComponent
