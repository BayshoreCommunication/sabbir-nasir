import React from "react";
import Head from "next/head";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { serviceData } from "../../config/data";

const css = `
  h1{
    font-size: 40px;
    font-weight: 900;
    padding-top: 10px;
  }
  h2{
    padding-top: 10px;
    font-size: 26px;
    font-weight: 700;
  }
  p{
    padding-top: 2px;
    padding-bottom: 2px;
  }
  ul{
    list-style-type: disc;
    margin-left: 30px;
    
  }
  li{
    padding-top: 5px;
    padding-bottom: 5px;
  }
  br{
    padding-top: 1px;
    padding-bottom: 1px;
}
nav{
  padding-top: 12px;
}

`;

const ServiceDetailsPage = async ({
  params,
}: {
  params: Promise<{ link: string }>;
}) => {
  const { link } = await params;

  const servicesDetails = serviceData?.filter(
    (service: any) => service.link === link
  );

  // console.log("serviceData", serviceData);

  if (!servicesDetails || servicesDetails.length === 0) {
    notFound();
  }
  // console.log("services", areaspracticeData);
  return (
    <>
      <Head>
        <title>{servicesDetails[0]?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </Head>

      <style>{css}</style>

      <section className="bg-white">
        <div className="container py-10 md:py-20">
          {servicesDetails?.map((services: any, index) => (
            <div key={index} className="">
              <div className="mt-5 text-base">
                {parse(services?.description)}
              </div>
            </div>
          ))}
          {/* Service 1 */}
          <div></div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsPage;
