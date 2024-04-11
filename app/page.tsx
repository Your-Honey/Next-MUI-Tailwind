import Banner from "@/layout/banner/inde";
import Header from "@/layout/header";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import OurSpeciality from "@/layout/ourSpeciality";
import FindPopularTour from "@/layout/findPopularTour";
import DiscountMessageSection from "@/layout/discountMessageSection";
import PopularActivity from "@/layout/popularActivity";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Banner />
        <OurSpeciality />
        <FindPopularTour />
        <DiscountMessageSection />
        <PopularActivity />
      </Container>
      <Box className="py-24 h-[465px] px-40 bg-rose-50 ">
        <Box className="flex justify-between px-[60px] mb-16">
          <Typography variant="body2">
            Speak to our expert at
            <Typography
              fontWeight={500}
              className="text-orange-500"
              variant="body2"
              component="span"
            >
              1-800-453-6744
            </Typography>
          </Typography>
          <Typography variant="body2">Follow Us</Typography>
        </Box>
        <Box className="flex justify-between">
          <Box className="max-w-[300px]">
            <Typography variant="subtitle1" className="mb-4">
              Contact
            </Typography>
            <Typography
              className="mb-2"
              variant="body2"
              component="p"
              fontWeight={400}
            >
              328 Queensberry Street, North Melbourne VIC3051, Australia.
            </Typography>
            <Typography variant="caption">hi@viatours.com</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" className="mb-4">
              Company
            </Typography>{" "}
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              About Us
            </Typography>
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              Tourz Reviews
            </Typography>
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              Contact Us
            </Typography>
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              Travel Guides
            </Typography>
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              Data Policy
            </Typography>
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              Cookie Policy
            </Typography>
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              Legal
            </Typography>
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              Sitemap
            </Typography>
          </Box>
          <Box>
            {" "}
            <Typography variant="subtitle1" className="mb-4">
              Support
            </Typography>{" "}
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              Get in Touch{" "}
            </Typography>
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              Help center{" "}
            </Typography>
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              Live chat{" "}
            </Typography>
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              How it works{" "}
            </Typography>
          </Box>
          <Box>
            {" "}
            <Typography variant="subtitle1" className="mb-4">
              Newsletter
            </Typography>{" "}
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              Subscribe to the free newsletter and stay up to date
            </Typography>
            <Grid2 container className="bg-white h-[30px] w-[265px] mb-12">
              <Grid2>
                <input
                  className="w-[200px] h-[30px]"
                  placeholder="Your email address"
                />
              </Grid2>
              <Grid2>
                <Button variant="text" size="small" className="text-black">
                  Send
                </Button>
              </Grid2>
            </Grid2>
            <Typography variant="subtitle1" className="mb-4">
              Mobile Apps
            </Typography>{" "}
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              IOS App
            </Typography>
            <Typography
              className="mb-2"
              variant="caption"
              component="p"
              fontWeight={500}
            >
              Android App
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
