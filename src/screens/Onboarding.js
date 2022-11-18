import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Swiper from "react-native-swiper";
import OnbTutorial from "../components/Onboarding/OnbTutorial";
import OnbBle from "../components/Onboarding/OnbBle";
import OnbContinue from "../components/Onboarding/OnbContinue";
import OnbNext from "../components/Onboarding/OnbNext";
import OnbBack from "../components/Onboarding/OnbBack";

const OnboardingScreen = (props) => {
  const [pageIndex, setPageIndex] = useState(0);
  const isFirstLaunch = useSelector((state) => state.onboarding.value);

  const handleNextPage = (index) => {
    if (index < 3) {
      setPageIndex(index + 1);
    }
  };

  const handlePrevPage = (index) => {
    if (index > 0) {
      setPageIndex(index - 1);
    }
  };

  return (
    <Swiper
      style={{ backgroundColor: "#000" }}
      showsPagination={false}
      loop={false}
      showsButtons={true}
      nextButton={<OnbNext pageIndex={pageIndex} onPageChange={handleNextPage} />}
      prevButton={<OnbBack pageIndex={pageIndex} onPageChange={handlePrevPage} />}
      index={pageIndex}
      onIndexChanged={(i) => setPageIndex(i)}
    >
      <OnbTutorial
        header={"Header I"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque amet eius quae omnis iste. Vel exercitationem doloribus laborum ullam quia."
        }
        image={<Image source={require("../../assets/ob-01.png")} />}
        styles={styles}
        pageIndex={pageIndex}
        {...props}
      />
      <OnbTutorial
        header={"Header II"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque amet eius quae omnis iste. Vel exercitationem doloribus laborum ullam quia."
        }
        image={<Image source={require("../../assets/ob-01.png")} />}
        styles={styles}
        pageIndex={pageIndex}
        {...props}
      />
      <OnbTutorial
        header={"Header III"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque amet eius quae omnis iste. Vel exercitationem doloribus laborum ullam quia."
        }
        image={<Image source={require("../../assets/ob-01.png")} />}
        styles={styles}
        pageIndex={pageIndex}
        {...props}
      />
      <OnbBle
        header={"Listed Devices"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque amet eius quae omnis iste. Vel exercitationem doloribus laborum ullam quia."
        }
        styles={styles}
      >
        <OnbContinue isFirstLaunch={isFirstLaunch} />
      </OnbBle>
    </Swiper>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#020212",
    width: "100%",
    height: "90%",
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    width: "100%",
    height: "70%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bottomNavigation: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "#D9D6D9",
    fontSize: "48px",
    fontWeight: "bold",
  },
  description: {
    color: "#D9D6D9",
    fontSize: "24px",
    fontWeight: "300",
    marginHorizontal: 60,
    textAlign: "center",
    width: "80%",
  },
});
