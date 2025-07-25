"use client"

import { Card, CardBody, CardFooter, Link } from "@nextui-org/react"
import { ArrowButton } from "../Button"
import insight1 from "../../../public/images/homepage/new-tech.png"
import insight2 from "../../../public/images/homepage/client-meeting.png"
import insight3 from "../../../public/images/homepage/new-tech-awareness.png"
import Image from "next/image"
import { MotionH3, MotionP } from "../Motion/Motion"

const insightsData = [
  {
    id: 1,
    date: "30",
    month: "Nov",
    year: "2021",
    image: insight1.src,
    title: "New technology awarness.",
    description: "Delightful remarkably mr on announcing themselves entreaties favourable.",
    link: "#",
  },
  {
    id: 2,
    date: "01",
    month: "Dec",
    year: "2021",
    image: insight2.src,
    title: "Client meeting discussion.",
    description: "About to in so terms voice at. Equal an would is found seems of. The particular f...",
    link: "#",
  },
  {
    id: 3,
    date: "04",
    month: "Dec",
    year: "2021",
    image: insight3.src,
    title: "Fast growth for business",
    description: "At more shed went up is roof if loud case. Delay music in lived noise an. Beyond ge...",
    link: "#",
  },
]

export default function Insights() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
      
        <MotionH3
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                      },
                    }}
                    className="text-4xl lg:text-5xl font-bold text-center mb-4"
                  >
                   Insights
                  </MotionH3>
                  <MotionP
                    initial={{ opacity: 0, y: "50px" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.4,
                        duration: 0.8,
                      },
                    }}
                    className="text-[#8C8C8C]"
                  >
                     You&apos;ve hit a wall. Your passion, talent, and energy drove your company&apos;s early success,
                     <br /> but you&apos;re caught in
                      what we call the Holy Trap
                    
                  </MotionP>    
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insightsData.map((insight) => (
          <Card key={insight.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardBody className="p-0">
              <div className="relative w-full">
                <Image
                  src={insight.image as any}
                  alt={insight.title}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center z-10">
                  <div className="text-2xl font-bold text-gray-900">{insight.date}</div>
                  <div className="text-sm text-gray-600">{insight.month}</div>
                  <div className="text-sm text-gray-600">{insight.year}</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{insight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{insight.description}</p>
              </div>
            </CardBody>

            <CardFooter className="pt-0 px-6 pb-6">
              <Link
                href={insight.link}
                className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center gap-1 transition-colors"
              >
                <ArrowButton size="sm">Read More</ArrowButton>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
