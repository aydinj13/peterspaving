"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const services = [
  { id: "1", title: "Driveways", imageUrl: "images/driveway.jpg", content: "We do driveways.", link: "driveways", badge: true },
  { id: "2", title: "Patios", imageUrl: "images/patio.jpg", content: "We do patios.", link: "patios", badge: true },
  { id: "3", title: "Porches", imageUrl: "images/porch.jpg", content: "We do porches.", link: "porches", badge: true },
  { id: "4", title: "Pathways", imageUrl: "images/pathway.jpg", content: "We do pathways.", link: "pathways", badge: false },
  { id: "5", title: "Wash & Seal", imageUrl: "images/washseal.jpg", content: "We do Wash & Seal.", link: "wash-and-seal", badge: false },
  { id: "6", title: "Interlock Repairs", imageUrl: "images/interlock.jpg", content: "We do Interlocking Repairs.", link: "interlock-repairs", badge: false },
  { id: "7", title: "Hardscaping", imageUrl: "images/hardscape.jpg", content: "We do Hardscaping.", link: "hardscaping", badge: false },
  { id: "8", title: "Retaining Wall", imageUrl: "images/retainingwall.jpg", content: "We do Retaining Wall.", link: "retaining-wall", badge: false },
];

export default function Projects() {
  return (
    <div>
      <h2 className="font-bold text-center text-3xl m-10">Services We Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 gap-5 mb-5">
        {services.map((service) => (
          <Card key={service.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={service.imageUrl} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>Service #{service.id}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{service.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="accent1"
                onClick={() => {
                  window.open(`/services/${service.link}`);
                }}
              >
                Learn More
              </Button>
              {service.badge && <Badge variant="outline">Top Service</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}