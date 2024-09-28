import { Cloud, Scroll } from "lucide-react-native";
import { Image, ImageBackground } from "react-native";
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
import { Text } from "~/components/ui/text";
import { H1, H2, H4, P } from "~/components/ui/typography";

export default function CardScreen() {
  return (
    <ScrollView className="bg-background">
      <View className="container mt-3 mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <View className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-3"></View>
        <View>
          <Text className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mt-3">
            <H1>Fresh from the Farm</H1>
          </Text>
          <Text className="text-4xl font-extrabold text-primary">
            <H1>Direct to Your Table</H1>
          </Text>
          <Scroll />
          <Text className="mt-6 text-xl text-muted-foreground max-w-lg">
            <P>
              Discover the finest locally sourced produce and farm equipment.
              Support local farmers and enjoy the freshest ingredients for your
              meals.
            </P>
          </Text>
        </View>
      </View>
      <View className="mt-10 flex flex-col sm:flex-row gap-4">
        <Button className=" py-3 px-6 rounded-lg">
          <Text className="text-lg text-center">Shop Products</Text>
        </Button>
        <Button variant="outline" size="lg">
          <Text className="text-lg text-center">Browse Equipment</Text>
        </Button>
      </View>
      {/* <View className="relative h-64 sm:h-72 md:h-96 lg:h-full mt-8">
        <Image
          source={{ uri: "https://via.placeholder.com/200" }}
          alt="Farm Fresh Produce"
          className="object-cover w-full h-full rounded-lg"
        />
      </View> */}

      <Scroll />
      <View className="mt-20">
        <Text className="text-2xl font-bold mb-8">
          <H2>Quick Access</H2>
        </Text>
      </View>

      <View className="flex flex-row">
        <View className="flex-1 justify-center items-center gap-5 p-6">
          <QuickAccessCard
            title={"Weather Forecast"}
            description={"Stay updated with local weather"}
            icon={<Cloud size={24} />}
          />
        </View>
        <View className="flex-1 justify-center items-center gap-5 p-6">
          <QuickAccessCard
            title={"Weather Forecast"}
            description={"Stay updated with local weather"}
            icon={<Cloud size={24} />}
          />
        </View>
      </View>
    </ScrollView>
  );
}
function QuickAccessCard({ title, description, icon, link }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 w-full max-w-sm">
      <CardHeader>
        <View className="flex items-center space-x-4">
          <Text>{icon}</Text>

          <CardTitle>{title}</CardTitle>
          <CardDescription>
            <Text>{description}</Text>
          </CardDescription>
        </View>
      </CardHeader>
    </Card>
  );
}
