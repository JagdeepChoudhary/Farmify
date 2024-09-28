import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Footer } from "./Footer";
import Menubar from "./Header";

const products = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 2.99,
    category: "Fruits",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Organic Carrots",
    price: 1.99,
    category: "Vegetables",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Free-range Eggs",
    price: 4.99,
    category: "Dairy",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Whole Grain Bread",
    price: 3.49,
    category: "Bakery",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Organic Milk",
    price: 3.99,
    category: "Dairy",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Fresh Tomatoes",
    price: 2.49,
    category: "Vegetables",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Menubar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <Input placeholder="Search products..." className="max-w-sm" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="fruits">Fruits</SelectItem>
              <SelectItem value="vegetables">Vegetables</SelectItem>
              <SelectItem value="dairy">Dairy</SelectItem>
              <SelectItem value="bakery">Bakery</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {product.category}
                </p>
                <p className="text-lg font-bold mt-2">
                  ${product.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
