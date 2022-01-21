import type { NextPage } from "next";
import { useEffect, useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import axios from "axios";

const Home: NextPage = () => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    setInterval(() => {
      apiHandler();
    }, 10);
  }, []);

  const apiHandler = async () => {
    const data = await axios.get("/api/distance");
    setDistance(data.data.distance);
  };

  const colorHandle = () => {
    if (distance < 15) {
      return `rgba(0,${120 + distance * 6},0)`;
    }
    if (distance >= 15 && distance < 20) {
      return `rgb(255, 246, 0)`;
    } else {
      return `rgb(247, 2, 2)`;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        background: "rgb(249, 249, 249)",
        borderRadius: "20px",
        margin: "100px auto",
        padding: "110px",
        position: "relative",
        boxShadow: "0 0 15px 1.3px #dddd ",
      }}
    >
      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background: colorHandle(),
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
      ></div>
      <div>
        <CircularSlider
          dataIndex={distance}
          label="سانتی متر"
          knobDraggable={false}
          min={0}
          max={30}
          hideKnob={true}
          progressColorFrom={colorHandle()}
          progressColorTo={colorHandle()}
          trackColor={colorHandle()}
        />
      </div>
    </div>
  );
};

export default Home;
