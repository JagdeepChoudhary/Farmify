import React from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { Mail, Lock, Eye, EyeOff, Send, ArrowLeft } from "lucide-react-native";
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
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

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

export default function ExpertScreen() {
  return (
    <ScrollView className="bg-background p-4">
      <Text>
        {" "}
        <H1 className="text-3xl font-bold mb-6">Talk to an Expert</H1>
      </Text>

      <View className="flex flex-col space-y-6">
        {experts.map((expert) => (
          <Card key={expert.id}>
            <CardHeader>
              <View className="flex-row items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    source={{ uri: expert.image }}
                    alt={expert.name}
                  />
                  <AvatarFallback>
                    <Text>
                      {expert.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Text>
                  </AvatarFallback>
                </Avatar>
                <View>
                  <CardTitle>
                    <Text className="text-lg font-semibold">{expert.name}</Text>
                  </CardTitle>
                  <Text>
                    <P className="text-sm text-muted-foreground">
                      {expert.specialty}
                    </P>
                  </Text>
                </View>
              </View>
            </CardHeader>
            <CardContent>
              <Text>
                {" "}
                <P
                  className={`text-sm ${
                    expert.availability === "Available"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {expert.availability}
                </P>
              </Text>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                disabled={expert.availability !== "Available"}
              >
                <Text className="text-sm font-medium">
                  {expert.availability === "Available"
                    ? "Select"
                    : "Unavailable"}
                </Text>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </View>
      <Card>
        <CardHeader>
          <CardTitle>Ask Your Question</CardTitle>
        </CardHeader>
        <CardContent>
          <View>
            <View className="grid w-full items-center gap-4">
              <View className="flex flex-col space-y-1.5">
                <Label htmlFor="expert-select">
                  <Text>Select an Expert</Text>
                </Label>
                <Select
                  value={selectedExpert}
                  onValueChange={handleExpertChange}
                >
                  <SelectTrigger id="expert-select">
                    <SelectValue placeholder="Choose an expert" />
                  </SelectTrigger>
                  <SelectContent>
                    {experts.map((expert) => (
                      <SelectItem key={expert.id} value={expert.id.toString()}>
                        <Text>
                          {expert.name} - {expert.specialty}
                        </Text>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </View>
              <View className="flex flex-col space-y-1.5">
                <Label htmlFor="query">
                  <Text>Your Question</Text>
                </Label>
                <Textarea
                  id="query"
                  placeholder="Type your question here..."
                  value={query}
                  onChange={handleQueryChange}
                />
              </View>
            </View>
          </View>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={!selectedExpert || !query}>
            <Text>Submit Question</Text>
          </Button>
        </CardFooter>
      </Card>
    </ScrollView>
  );
}
