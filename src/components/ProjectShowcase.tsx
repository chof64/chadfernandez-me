"use client";

import React from "react";
import { cn } from "~/lib/utils";
import Heading from "./white-design/Heading";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export default function ProjectShowcase({ className }: { className?: string }) {
  const data = [
    {
      heading: "Unified Barangay System",
      subheading: "Aug 2024 - Now | Alpha Stage",
      description: (
        <>
          Unified Barangay System is a web-based application that aims to
          streamline the process of barangay transactions. It is designed to
          provide a user-friendly interface for the residents of a barangay to
          request for documents, and for officials to manage the requests.
        </>
      ),
      images: [
        "/projects/unified-barangay-system/home.png",
        "/projects/unified-barangay-system/features.png",
        "/projects/unified-barangay-system/login.png",
      ],
    },
    {
      heading: "UACCS Attendance App",
      subheading: "Oct 2023 - Now | Version 1",
      description: (
        <>
          Developed to help the College of Computer Studies (CCS) of the
          University of Antique (UA) to monitor the attendance of the students
          during events. UACCS Attendance App is a web app that allows the
          students to log their participation in events by generating their
          attendance QR code.
        </>
      ),
      images: [
        "/projects/attendance-app/home.png",
        "/projects/attendance-app/create.png",
        "/projects/attendance-app/list.png",
        "/projects/attendance-app/generate.png",
      ],
    },
  ] as const;

  return (
    <div className={cn("space-y-12", className)}>
      {data.map((item) => (
        <div className="group" key={item.heading}>
          <Carousel
            className="mt-6"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {item.images.map((image) => (
                <CarouselItem key={image}>
                  <div className="relative aspect-video w-full">
                    <Image
                      className="rounded-lg"
                      src={image}
                      alt={item.heading}
                      fill
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 lg:-left-12" />
            <CarouselNext className="right-3 lg:-right-12" />
          </Carousel>
          <div className="mt-4">
            <Heading
              className="transition-color delay-75 duration-150 ease-in-out group-hover:text-accent-foreground"
              order={3}
              style={4}
            >
              {item.heading}
            </Heading>
            <p className="typography-muted">{item.subheading}</p>
            <p className="typography-p !mt-3">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
