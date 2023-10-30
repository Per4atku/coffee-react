import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const today = dayjs();
const six_months = dayjs().add(6, "month");

const ReservationDatePicker = () => {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date"
        minDate={today}
        maxDate={six_months}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        slotProps={{
          layout: {
            sx: {
              ".MuiDateCalendar-root": {
                color: "#12463A",
                borderRadius: 0,
                borderWidth: 1,
                border: "1px solid #858585",
                backgroundColor: "#fff",
              },
              ".MuiPickersDay-today": {
                color: "#000 !important",
                borderRadius: "1px !important",
                border: "1px dashed  #12463A !important",
                backgroundColor: "transparent !important",
              },
              ".Mui-selected": {
                borderRadius: "2px !important",
                border: "1px solid #12463A !important",
                backgroundColor: "rgba(18, 70, 58, 1) !important",
                color: "white !important",
              },
              ".MuiButtonBase-root": {
                borderRadius: "1px !important",
              },
              ".css-1u23akw-MuiButtonBase-root-MuiPickersDay-root:hover": {
                background: "rgba(18, 70, 58, 0.05)",
              },
              ".MuiDialogActions-root button": {
                color: "#12463A",
              },
            },
          },
        }}
        sx={{
          width: "100%",
          "& .MuiFormLabel-root": { color: "white !important", top: { sm: -2, xs: -6 } },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #858585 !important",
          },
          "& .MuiInputBase-root": {
            borderRadius: 0,
            height: { sm: 50, xs: 40 },
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .Mui-focused": {
            top: 0,
          },
          "& .MuiFormLabel-filled": {
            top: 0,
          },
          "& .MuiInputBase-input::placeholder": {
            color: "white",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #858585 !important",
          },
          "& .MuiButtonBase-root": {
            color: "white",
          },
          ".MuiDateCalendar-root": {
            color: "#1565c0",
            borderRadius: 0,
            borderWidth: 1,
            borderColor: "#2196f3",
            border: "1px solid",
            backgroundColor: "#bbdefb",
          },
        }}
      />
    </LocalizationProvider>
  );
};
export default ReservationDatePicker;
