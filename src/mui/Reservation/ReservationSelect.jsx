import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ReservationSelect = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl
      sx={{
        width: "100%",
        "& .MuiFormLabel-root": {
          color: "white !important",
          top: { sm: -2, xs: -6 },
        },
        "& .Mui-focused": {
          top: 0,
        },
        "& .MuiFormLabel-filled": {
          top: 0,
        },
        "& .MuiInputBase-root": {
          height: { sm: 50, xs: 40 },
        },
      }}>
      <InputLabel id="demo-simple-select-label">Person</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Person"
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: 0,
              "& .MuiMenuItem-root": {},
            },
          },
        }}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #858585 !important",
            borderRadius: "0px !important",
          },
          "& .MuiSelect-select": {
            color: "white !important",
          },
          "& .MuiSvgIcon-root": {
            color: "white !important",
          },
        }}>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6 and more...</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ReservationSelect;
