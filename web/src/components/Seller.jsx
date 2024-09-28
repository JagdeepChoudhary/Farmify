import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Star } from "lucide-react";
import Menubar from "./Header";
import { Footer } from "./Footer";

const sellers = [
  {
    id: 1,
    name: "Green Acres Farm",
    rating: 4.5,
    products: 25,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sunshine Orchards",
    rating: 4.8,
    products: 18,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Valley View Dairy",
    rating: 4.2,
    products: 30,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Hilltop Organics",
    rating: 4.7,
    products: 22,
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function SellersPage() {
  return (
    <>
      <Menubar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Sellers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sellers.map((seller) => (
            <Card key={seller.id}>
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <img
                  src={seller.image}
                  alt={seller.name}
                  className="w-16 h-16 rounded-full"
                />
                <CardTitle>{seller.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1">{seller.rating.toFixed(1)}</span>
                </div>
                <p className="text-muted-foreground">
                  {seller.products} products
                </p>
                <Button className="w-full mt-4">View Products</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
