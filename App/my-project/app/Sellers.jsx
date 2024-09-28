import { Cloud, Scroll, Star } from "lucide-react-native";
import { Image } from "react-native";
import { ScrollView, View } from "react-native";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { H1, P } from "~/components/ui/typography";

const sellers = [
  {
    id: 1,
    name: "Green Acres Farm",
    rating: 4.5,
    products: 25,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Sunshine Orchards",
    rating: 4.8,
    products: 18,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Valley View Dairy",
    rating: 4.2,
    products: 30,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Hilltop Organics",
    rating: 4.7,
    products: 22,
    image: "https://via.placeholder.com/100",
  },
];

export default function CardScreen() {
  return (
    <ScrollView className="bg-background">
      <View className="container mx-auto px-4 py-8">
        <Text>
          <H1 className="text-3xl font-bold mb-6">Our Sellers</H1>
        </Text>
        <View className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sellers.map((seller) => (
            <Card key={seller.id}>
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Image
                  source={{ uri: "https://via.placeholder.com/100" }}
                  alt={seller.name}
                  className="w-16 h-16 rounded-full"
                />
                <CardTitle>{seller.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <View className="flex flex-row items-center mb-2">
                  {/* Use the `color` and `size` props for the Star icon */}
                  <Star size={20} color="yellow" fill="yellow" />
                  <Text className="ml-1">{seller.rating.toFixed(2)}</Text>
                </View>
                <Text className="text-muted-foreground">
                  {seller.products} products
                </Text>
                <Button className="w-full mt-4">
                  <Text>View Products</Text>
                </Button>
              </CardContent>
            </Card>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
