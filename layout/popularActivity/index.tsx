import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Cruize from "../../assests/images/cruize.svg";
import MuzsumeTour from "../../assests/images/musuemTour.svg";
import BeachTour from "../../assests/images/beachTour.svg";
import CityTour from "../../assests/images/cityTour.svg";
import Food from "../../assests/images/food.svg";
import Hiking from "../../assests/images/hiking.svg";

const PopularActivity = () => {
  return (
    <Box className="m-24">
      <Typography className="mb-4" fontWeight={600} variant="h5">
        Find popular Tours
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 lg={4} className="flex flex-col ">
          <Image
            src={Cruize}
            className=" h-[240px]"
            alt="curize"
            width={0}
            height={0}
          />
          <Image
            src={MuzsumeTour}
            alt="Musume Tour"
            className=" h-[240px]"
            width={0}
            height={0}
          />
        </Grid2>
        <Grid2 lg={4}>
          <Image
            src={BeachTour}
            alt="Beach Tour"
            className=" h-[510px]"
            width={0}
            height={0}
          />
        </Grid2>
        <Grid2 lg={4}>
          <div>
            <Image src={CityTour} alt="City Tour" width={0} height={0} />
          </div>
          <Box className="flex">
            <Image
              src={Food}
              alt="Food"
              className="w-[50%]"
              width={0}
              height={0}
            />

            <Image
              src={Hiking}
              className="w-[50%]"
              alt="Hiking"
              width={0}
              height={0}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PopularActivity;
