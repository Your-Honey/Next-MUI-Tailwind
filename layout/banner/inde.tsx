import { Box, Button, Checkbox, Typography } from "@mui/material";
import headerBackground from "../../assests/images/headerBackground.svg";
import Image from "next/image";

const Banner = () => {
  return (
    <Box className="relative flex justify-center items-center ">
      {" "}
      <Image src={headerBackground} alt="image" width={0} height={0} />
      <Box className="absolute w-2/3">
        <Box className=" flex flex-col items-center ">
          <Typography component="h3" variant="h3" className="text-white">
            Your world of joy
          </Typography>
          <Typography className="text-white">
            From local escapes to far-flung adventures, find what makes you
            happy anytime, anywhere
          </Typography>
        </Box>
        <Box className="flex items-center justify-around bg-white rounded-lg my-10">
          <Box className="flex">
            <Checkbox
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 60 },
              }}
            />

            <Box className="my-3">
              <Typography component="h1" variant="subtitle1">
                Where
              </Typography>
              <Typography
                className="text-slate-500"
                component="span"
                variant="body2"
              >
                Search Destination
              </Typography>
            </Box>

            <Box className="flex">
              <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 60 } }} />

              <Box className="my-3">
                <Typography component="h1" variant="body2">
                  When
                </Typography>
                <Typography
                  className="text-slate-500"
                  component="span"
                  variant="body2"
                >
                  February 05 ~ March 14
                </Typography>
              </Box>
            </Box>
            <Box className="flex">
              <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 60 } }} />

              <Box className="my-3">
                <Typography component="h1" variant="body2">
                  Tour Type
                </Typography>
                <Typography
                  className="text-slate-500"
                  component="span"
                  variant="body2"
                >
                  All tour
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Button
              className="bg-[#ea580c] rounded-full"
              variant="contained"
              size="large"
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
