import { Box, Button, Container, Typography } from "@mui/material";
import Logo from "../../assests/images//logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <Container className="flex justify-between items-center h-16">
      <Box className="flex justify-evenly w-1/2 ">
        <Image src={Logo} alt="company logo" width={0} height={0} />
        <input placeholder="Search destinations or activities" />
      </Box>
      <Box className="flex justify-center w-1/2 ">
        <Box className="flex justify-evenly w-4/5 items-center text-neutral-500">
          <Typography variant="body2" component="p">
            Destinations
          </Typography>
          <Typography variant="body2" component="p">
            Activities
          </Typography>
          <Typography variant="body2" component="p">
            USD
          </Typography>
          <Typography variant="body2" component="p">
            Sign up
          </Typography>
          <Button
            className="bg-[#ea580c] rounded-full"
            variant="contained"
            size="small"
          >
            Log in
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
