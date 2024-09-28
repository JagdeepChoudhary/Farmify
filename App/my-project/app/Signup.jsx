import { Cloud, Scroll, Star } from "lucide-react-native";
import { useState } from "react";
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
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Text } from "~/components/ui/text";
import { H1, P } from "~/components/ui/typography";

export default function CardScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      return;
    }
  };
  return (
    <ScrollView className="bg-background">
      <View className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              <Text>
                <H1>Sign Up</H1>
              </Text>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <View className="space-y-4">
              <View className="space-y-2">
                <Label htmlFor="name">
                  <Text>Name</Text>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </View>
              <View className="space-y-2">
                <Label htmlFor="email"></Label>
                <Text>Email</Text>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </View>
              <View className="space-y-2">
                <Label htmlFor="email"></Label>
                <Text>Password</Text>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </View>
              <View className="space-y-2">
                <Label htmlFor="role">
                  <Text>Role</Text>
                </Label>
                <Select value={role} onValueChange={setRole} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">
                      <Text>Farmer</Text>
                    </SelectItem>
                    <SelectItem value="consumer">
                      <Text>Consumer</Text>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </View>
              <View className="flex flex-row items-center space-x-2 space-y-2">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked)}
                />
                <Label htmlFor="terms" className="text-sm">
                  <Text>accept the terms and conditions</Text>
                </Label>
              </View>
              <Button
                type="submit"
                className="w-full space-y-2"
                disabled={!acceptTerms}
              >
                <Text>Sign Up</Text>
              </Button>
            </View>
            <View className="space-y-3 text-center">
              <Text>
                <P>
                  Already have an account?{" "}
                  <Text className="text-primary">Log in</Text>
                </P>
              </Text>
            </View>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
