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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import Menubar from "./Header";
import { Footer } from "./Footer";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Sustainable Farming Practices",
    category: "Sustainability",
    author: "Jane Doe",
    date: "2023-05-15",
    excerpt:
      "Learn about the latest sustainable farming practices that can help reduce environmental impact while improving crop yields.",
  },
  {
    id: 2,
    title: "Precision Agriculture Technology",
    category: "Technology",
    author: "John Smith",
    date: "2023-05-10",
    excerpt:
      "Discover how precision agriculture technology is revolutionizing farming and increasing efficiency.",
  },
  {
    id: 3,
    title: "Organic Pest Control Methods",
    category: "Organic Farming",
    author: "Emily Brown",
    date: "2023-05-05",
    excerpt:
      "Explore effective organic pest control methods that can protect your crops without harmful chemicals.",
  },
  {
    id: 4,
    title: "Climate Change and Agriculture",
    category: "Climate",
    author: "Michael Johnson",
    date: "2023-04-30",
    excerpt:
      "Understand the impacts of climate change on agriculture and learn strategies for adaptation.",
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  const handleSearchChange = () => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = () => {
    setCategory(value);
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      category === "all" ||
      post.category.toLowerCase() === category.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Menubar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Farm Insights Blog</h1>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <Label htmlFor="search" className="sr-only">
              Search
            </Label>
            <Input
              id="search"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <Select value={category} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="sustainability">Sustainability</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="organic farming">Organic Farming</SelectItem>
              <SelectItem value="climate">Climate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  By {post.author} | {post.date} | {post.category}
                </p>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center mt-8">
            No blog posts found matching your criteria.
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}
