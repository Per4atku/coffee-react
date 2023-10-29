import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";

const ReservationTimeField = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimeField
        label="Timing"
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #858585 !important",
            borderRadius: 0,
          },
          "& .MuiInputBase-input": {
            color: "white !important",
          },
          "& .MuiFormLabel-root": {
            color: "white !important",
            top: { sm: -2, xs: -6 },
          },
          "& .MuiInputBase-root": {
            height: { sm: 50, xs: 40 },
          },
          "& .Mui-focused": {
            top: 0,
          },
          "& .MuiFormLabel-filled": {
            top: 0,
          },
        }}
      />
    </LocalizationProvider>
  );
};
export default ReservationTimeField;
