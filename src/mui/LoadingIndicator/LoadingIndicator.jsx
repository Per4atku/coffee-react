import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingIndicator = () => {
  return (
    <div className="flex w-full items-center justify-center h-24">
      <CircularProgress sx={{ color: "#12463A" }} />
    </div>
  );
};
export default LoadingIndicator;
