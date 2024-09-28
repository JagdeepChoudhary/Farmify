"use client";

import { useState } from "react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import Menubar from "./Header";
import { Footer } from "./Footer";

// Mock expert data
const experts = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Crop Science",
    availability: "Available",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Prof. Michael Lee",
    specialty: "Soil Management",
    availability: "Busy",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Dr. Emily Brown",
    specialty: "Pest Control",
    availability: "Available",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function TalkToExpertPage() {
  const [selectedExpert, setSelectedExpert] = useState("");
  const [query, setQuery] = useState("");

  const handleExpertChange = () => {
    setSelectedExpert(value);
  };

  const handleQueryChange = () => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    // Handle query submission
    console.log(`Submitting query to expert ${selectedExpert}: ${query}`);
  };

  return (
    <>
      <Menubar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Talk to an Expert</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {experts.map((expert) => (
            <Card key={expert.id}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={expert.image} alt={expert.name} />
                    <AvatarFallback>
                      {expert.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{expert.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {expert.specialty}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p
                  className={`text-sm ${
                    expert.availability === "Available"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {expert.availability}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  disabled={expert.availability !== "Available"}
                >
                  {expert.availability === "Available"
                    ? "Select"
                    : "Unavailable"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Ask Your Question</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="expert-select">Select an Expert</Label>
                  <Select
                    value={selectedExpert}
                    onValueChange={handleExpertChange}
                  >
                    <SelectTrigger id="expert-select">
                      <SelectValue placeholder="Choose an expert" />
                    </SelectTrigger>
                    <SelectContent>
                      {experts.map((expert) => (
                        <SelectItem
                          key={expert.id}
                          value={expert.id.toString()}
                        >
                          {expert.name} - {expert.specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="query">Your Question</Label>
                  <Textarea
                    id="query"
                    placeholder="Type your question here..."
                    value={query}
                    onChange={handleQueryChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={!selectedExpert || !query}>
              Submit Question
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </>
  );
}
