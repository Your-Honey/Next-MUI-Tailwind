import { Box, Typography } from "@mui/material";
import ticket from "../../assests/images/ticket.svg";
import hotAirBallon from "../../assests/images/hotAirBallon.svg";
import diamond from "../../assests/images/diamond.svg";
import badge from "../../assests/images/badge.svg";
import Image from "next/image";

const OurSpeciality = () => {
  return (
    <Box className="m-24">
      <Typography fontWeight={600} component="h1" variant="h5">
        Why choose Tourz
      </Typography>

      <Box className="flex mt-9 justify-between">
        <Box className="w-1/5">
          <Image src={ticket} alt="ticket" width={0} height={0} />
          <Typography className="my-3" component="h1" variant="subtitle1">
            Ultimate flexibility
          </Typography>
          <Typography variant="caption" display="block">
            You're in control, with free cancellation and payment options to
            satisfy any plan or budget.
          </Typography>
        </Box>
        <Box className="w-1/5">
          <Image src={hotAirBallon} alt="ticket" width={0} height={0} />
          <Typography className="my-3" component="h1" variant="body1">
            Memorable experiences
          </Typography>
          <Typography variant="caption" display="block">
            Browse and book tours and activities so incredible, you'll want to
            tell your friends.
          </Typography>
        </Box>
        <Box className="w-1/5">
          <Image src={diamond} alt="ticket" width={0} height={0} />
          <Typography className="my-3" component="h1" variant="body1">
            Quality at our core
          </Typography>
          <Typography variant="caption" display="block">
            High-quality standards. Millions of reviews. A tourz company.
          </Typography>
        </Box>
        <Box className="w-1/5">
          <Image src={badge} alt="ticket" width={0} height={0} />
          <Typography className="my-3" component="h1" variant="body1">
            Award-winning support
          </Typography>
          <Typography variant="caption" display="block">
            New price? New plan? No problem. We're here to help, 24/7.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OurSpeciality;
