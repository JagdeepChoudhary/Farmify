import { Cloud, Scroll } from "lucide-react-native";
import { Image } from "react-native";
import { ScrollView, View } from "react-native";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Text } from "~/components/ui/text";
import { H1, H2, H4, P } from "~/components/ui/typography";
const products = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 2.99,
    category: "Fruits",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Organic Carrots",
    price: 1.99,
    category: "Vegetables",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Free-range Eggs",
    price: 4.99,
    category: "Dairy",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Whole Grain Bread",
    price: 3.49,
    category: "Bakery",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "Organic Milk",
    price: 3.99,
    category: "Dairy",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 6,
    name: "Fresh Tomatoes",
    price: 2.49,
    category: "Vegetables",
    image:
      "https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38007.jpg?t=st=1727501427~exp=1727505027~hmac=4e94df3ffd445f24dc81775e6e9334dc60c3f6fb5a68c1e68d1ed9901ca5a53d&w=996",
  },
];
export default function CardScreen() {
  return (
    <ScrollView className="bg-background">
      <View className="container mx-auto px-4 py-8">
        <Text>
          <H1 className="text-3xl font-bold mb-6">Our Products</H1>
        </Text>

        <View className="flex flex-row md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <Input placeholder="Search products..." className="max-w-sm" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                <Text>All Categories</Text>
              </SelectItem>
              <SelectItem value="fruits">
                <Text>Fruits</Text>
              </SelectItem>
              <SelectItem value="vegetables">
                <Text>Vegetables</Text>
              </SelectItem>
              <SelectItem value="dairy">
                <Text>Dairy</Text>
              </SelectItem>
              <SelectItem value="bakery">
                <Text>Bakery</Text>
              </SelectItem>
            </SelectContent>
          </Select>
        </View>
        <View className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <Image
                  source={{ uri: product.image }}
                  alt={product.name}
                  style={{ width: "100%", height: 200, borderRadius: 10 }}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <Text>
                  <P className="text-sm text-muted-foreground">
                    {product.category}
                  </P>
                </Text>

                <Text>
                  <P className="text-lg font-bold mt-2">
                    ${product.price.toFixed(2)}
                  </P>
                </Text>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Text>Add to Cart</Text>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
