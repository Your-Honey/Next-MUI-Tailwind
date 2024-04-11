import { Box, Button, Typography } from "@mui/material";
import dealBackGround from "../../assests/images/dealBackGround.svg";
import Image from "next/image";

const DiscountMessageSection = () => {
  return (
    <Box className="relative flex items-center ">
      <Image src={dealBackGround} alt="pink" width={0} height={0} />
      <Box className="absolute w-[28%] ml-36">
        <Typography variant="h4" fontWeight={600}>
          Grab up to{" "}
          <Typography
            fontWeight={600}
            className="text-orange-500"
            variant="h4"
            component="span"
          >
            35% off
          </Typography>{" "}
          on your favorite Destination
        </Typography>
        <Typography className="text-slate-500 my-2" variant="subtitle2">
          Limited time offer, don't miss the opportunity
        </Typography>
        <Button
          className="bg-[#ea580c] rounded-lg"
          variant="contained"
          size="large"
        >
          Book Now
        </Button>
      </Box>
    </Box>
  );
};

export default DiscountMessageSection;
