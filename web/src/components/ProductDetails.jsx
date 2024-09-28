"use client";

import { useEffect, useState } from "react";
import { Bar, BarChart, Line, LineChart } from "recharts";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart";
import Menubar from "./Header";
import { Footer } from "./Footer";

export default function ProductDetailPage({ productId = "1" }) {
  const [product, setProduct] = useState(null);

  // Fetch product data based on the productId
  useEffect(() => {
    // Replace this with actual data fetching logic
    const fetchedProduct = {
      id: productId,
      name: "Product A",
      price: 19.99,
      stock: 50,
      description: "This is a detailed description of Product A.",
    };
    setProduct(fetchedProduct);
  }, [productId]);

  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4500 },
    { month: "May", sales: 6000 },
    { month: "Jun", sales: 5500 },
  ];

  const stockData = [
    { name: "In Stock", value: 30 },
    { name: "Sold", value: 70 },
  ];

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Menubar />
      <div className="container mx-auto p-4 space-y-8">
        <h1 className="text-3xl font-bold">Product Details: {product.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <strong>ID:</strong> {product.id}
              </p>
              <p>
                <strong>Name:</strong> {product.name}
              </p>
              <p>
                <strong>Price:</strong> ${product.price.toFixed(2)}
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>
              <p>
                <strong>Description:</strong> {product.description}
              </p>
            </CardContent>
            <CardFooter>
              <Button>Edit Product</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sales Over Time</CardTitle>
              <CardDescription>
                Monthly sales data for the product
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  sales: { label: "Sales", color: "hsl(var(--chart-1))" },
                }}
                className="h-[300px]"
              >
                <LineChart data={salesData}>
                  <Line
                    type="monotone"
                    dataKey="sales"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent indicator="line" />}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stock Status</CardTitle>
              <CardDescription>Current stock levels and sales</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  value: { label: "Value", color: "hsl(var(--chart-2))" },
                }}
                className="h-[300px]"
              >
                <BarChart data={stockData}>
                  <Bar dataKey="value" />
                  <ChartTooltip
                    content={<ChartTooltipContent indicator="bar" />}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}
