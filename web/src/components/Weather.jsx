"use client";

import { useState } from "react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Cloud, Sun, CloudRain, Wind } from "lucide-react";
import Menubar from "./Header";
import { Footer } from "./Footer";

// Mock weather data
const weatherData = [
  { day: "Monday", temp: 72, condition: "Sunny", icon: Sun },
  { day: "Tuesday", temp: 68, condition: "Partly Cloudy", icon: Cloud },
  { day: "Wednesday", temp: 65, condition: "Rainy", icon: CloudRain },
  { day: "Thursday", temp: 70, condition: "Windy", icon: Wind },
  { day: "Friday", temp: 75, condition: "Sunny", icon: Sun },
];

export default function WeatherForecastPage() {
  const [location, setLocation] = useState("Springfield");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle location submission (e.g., fetch weather data for the new location)
    console.log(`Fetching weather data for ${location}`);
  };

  return (
    <>
      <Menubar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Weather Forecast</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enter Location</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="location" className="sr-only">
                  Location
                </Label>
                <Input
                  id="location"
                  placeholder="Enter city or zip code"
                  value={location}
                  onChange={handleLocationChange}
                />
              </div>
              <Button type="submit">Get Forecast</Button>
            </form>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">
          5-Day Forecast for {location}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {weatherData.map((day) => (
            <Card key={day.day}>
              <CardHeader>
                <CardTitle>{day.day}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <day.icon className="w-12 h-12 mx-auto mb-2" />
                <p className="text-2xl font-bold">{day.temp}°F</p>
                <p>{day.condition}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Agricultural Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Based on the current forecast:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Ideal conditions for planting corn in the next 2-3 days</li>
              <li>Potential need for irrigation towards the end of the week</li>
              <li>
                Favorable conditions for pest control applications on Tuesday
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}
