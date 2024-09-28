import { Footer } from "./Footer";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Menubar from "./Header";

const equipmentItems = [
  {
    id: 1,
    name: "Tractor",
    price: 25000,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Harvester",
    price: 35000,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Plow",
    price: 5000,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Seeder",
    price: 8000,
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function EquipmentPage() {
  return (
    <>
      <Menubar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Farm Equipment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{item.name}</CardTitle>
                <p className="text-2xl font-bold mt-2">
                  ${item.price.toLocaleString()}
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
``;
