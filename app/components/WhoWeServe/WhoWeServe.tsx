"use client";
import Image from "next/image";
import React from "react";
import whoWeServeImg from "../../../public/images/homepage/services/who-we-serve.png";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { MotionDiv } from "../Motion/Motion";

const WhoWeServe = () => {
  const [selected, setSelected] = React.useState(["leaders"]);
  return (
    <div className="bg-secondary-color w-full text-center lg:text-start">
      <div className="main-container flex flex-col lg:flex-row items-center gap-x-12">
        <MotionDiv
          initial={{ x: "-100px" }}
          whileInView={{
            x: 0,
            transition: {
              duration: 1.2,
            },
          }}
          className="flex-1 py-5 lg:py-16"
        >
          <Image src={whoWeServeImg} alt="who-we-serve-image" />
        </MotionDiv>
        <MotionDiv
          initial={{ x: "100px" }}
          whileInView={{
            x: 0,
            transition: {
              duration: 1.2,
            },
          }}
          className="flex-1 flex flex-col gap-3"
        >
          <h3 className="text-2xl font-semibold">Who We Serve</h3>
          <p>
            We work with a diverse range of clients including small businesses,
            entrepreneurs, executives, and organizations seeking strategic
            guidance and growth solutions.
          </p>
          <div className="flex flex-col gap-3 mb-5 lg:mb-0 text-start">
            <CheckboxGroup
              color="success"
              value={selected}
              onValueChange={setSelected}
            >
              <div className="bg-white px-4 py-2 rounded-full text-xs lg:text-sm">
                <Checkbox value="leaders">Leaders</Checkbox>
              </div>
              <div className="bg-white px-4 py-2 rounded-full text-xs lg:text-sm">
                <Checkbox value="boards">Boards</Checkbox>
              </div>
              <div className="bg-white px-4 py-2 rounded-full text-xs lg:text-sm">
                <Checkbox value="organizations">Organizations</Checkbox>
              </div>
              <div className="bg-white px-4 py-2 rounded-full text-xs lg:text-sm">
                <Checkbox value="companies">
                  Public Companies · Private Companies
                </Checkbox>
              </div>
              <div className="bg-white px-4 py-2 rounded-full text-xs lg:text-sm">
                <Checkbox value="capital">
                  Private Equity · Venture Capital · Non-Profits
                </Checkbox>
              </div>
            </CheckboxGroup>
            {/* <p className="text-default-500 text-small">
                Selected: {selected.join(", ")}
              </p> */}
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default WhoWeServe;
