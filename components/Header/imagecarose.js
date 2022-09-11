import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid } from "@mui/material";
import { Colors } from "../../styles/colors";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    // imgPath:
    //   "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    imgPath: "/images/baner1.jpg",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const SwipeableTextMobileStepper = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        marginBottom: 5,
        alignItems: "center",
        width: "100%",
        marginTop: "60px",
      }}
    >
      <AutoPlaySwipeableViews
        autoplay={false}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    display: "block",
                    alignItems: "center",
                    maxWidth: "100%",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    height: "5vh",
                    marginLeft: "90px",
                    spacing: 4,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "cursive",
                      fontWeight: "bold",
                      color: Colors.secondary,
                    }}
                    variant="h2"
                  >
                    First Message
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "cursive",
                      fontWeight: "bold",
                      color: Colors.secondary,
                    }}
                    variant="h3"
                  >
                    Second Message
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "cursive",
                      fontWeight: "bold",
                      color: Colors.secondary,
                    }}
                    variant="h4"
                  >
                    Third Message
                  </Typography>
                </Box>
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box>
        <MobileStepper
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-between",
            marginLeft: "300px",
          }}
          //steps={maxSteps}
          steps={images.length}
          position="relative"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
};
export default SwipeableTextMobileStepper;
