import TextField from "@mui/material/TextField";
import * as React from "react";

const ReservationTextField = ({ label }) => {
  const [text, setText] = React.useState("");
  return (
    <div>
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #858585 !important",
            borderRadius: "0px !important",
          },
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
          "& .MuiInputBase-input": {
            color: "white !important",
          },
          "& .MuiInputBase-root": {
            height: { sm: 50, xs: 40 },
          },
        }}
      />
    </div>
  );
};
export default ReservationTextField;
