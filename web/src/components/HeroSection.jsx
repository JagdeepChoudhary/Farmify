import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { Cloud, BookOpen, Headphones, Tractor } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-primary">Fresh from the Farm</span>
              <span className="block">Direct to Your Table</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-lg">
              Discover the finest locally sourced produce and farm equipment.
              Support local farmers and enjoy the freshest ingredients for your
              meals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/products">Shop Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/equipment">Browse Equipment</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 sm:h-72 md:h-96 lg:h-full">
            <img
              src="/api/placeholder/600/400"
              alt="Fresh farm produce"
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Quick Access</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuickAccessCard
              title="Weather Forecast"
              description="Stay updated with local weather"
              icon={<Cloud className="h-6 w-6" />}
              link="/weather"
            />
            <QuickAccessCard
              title="Farm Blog"
              description="Read the latest farming insights"
              icon={<BookOpen className="h-6 w-6" />}
              link="/blog"
            />
            <QuickAccessCard
              title="Talk to an Expert"
              description="Get advice from agriculture professionals"
              icon={<Headphones className="h-6 w-6" />}
              link="/expert-talk"
            />
            <QuickAccessCard
              title="Farmer Resources"
              description="Access leasing and other resources"
              icon={<Tractor className="h-6 w-6" />}
              link="/lease"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
}

function QuickAccessCard({ title, description, icon, link }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <Link to={link} className="block p-6">
        <CardHeader>
          <div className="flex items-center space-x-4">
            {icon}
            <CardTitle>{title}</CardTitle>
          </div>
          <CardDescription className="mt-2">{description}</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
}
