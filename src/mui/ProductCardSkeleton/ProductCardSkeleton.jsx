import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ProductCardSkeleton = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        width: { xs: "16rem", lg: "20rem" },
        padding: "14px 16px",
        bgcolor: "#fff",
        borderRadius: "0.75rem",
        justifySelf: "center",
        marginTop: { lg: "3rem" },
      }}>
      <Skeleton
        variant="rounded"
        sx={{
          width: "100%",
          height: { xs: "11rem", lg: "14rem" },
          borderRadius: "0.75rem",
        }}
      />
      <Skeleton variant="text" sx={{ fontSize: "1.25rem" }} />
      <div className="flex items-center justify-between">
        <div className="flex gap-6">
          <Skeleton
            variant="rounded"
            width={53}
            height={30}
            sx={{ borderRadius: "0.5rem !important" }}
          />
          <Skeleton
            variant="rounded"
            width={53}
            height={30}
            sx={{ borderRadius: "0.5rem !important" }}
          />
        </div>
        <Skeleton variant="circular" width={40} height={40} />
      </div>
    </Stack>
  );
};
export default ProductCardSkeleton;
