import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { Mail, Lock, Eye, EyeOff } from "lucide-react-native";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
import { H1, P } from "~/components/ui/typography";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    // Implement login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <ScrollView className="bg-background">
      <View className="flex-1 justify-center items-center min-h-screen px-4 py-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>
              <H1 className="text-2xl font-bold text-center">Login</H1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <View className="space-y-4">
              <View className="space-y-2">
                <Label htmlFor="email">
                  <Text className="text-sm font-medium">Email</Text>
                </Label>
                <View className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    size={20}
                  />
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="pl-10"
                  />
                </View>
              </View>
              <View className="space-y-2">
                <Label htmlFor="password">
                  <Text className="text-sm font-medium">Password</Text>
                </Label>
                <View className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    size={20}
                  />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    className="pl-10 pr-10"
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff size={20} className="text-muted-foreground" />
                    ) : (
                      <Eye size={20} className="text-muted-foreground" />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <Button onPress={handleSubmit} className="w-full space-y-2">
                <Text className=" font-semibold">Login</Text>
              </Button>
            </View>
            <View className="mt-4 flex-row justify-center space-x-1">
              <P className="text-sm text-muted-foreground">
                Don't have an account?
              </P>
              <TouchableOpacity>
                <P className="text-sm text-primary font-semibold">Sign Up</P>
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="mt-2">
              <Text className="text-sm text-primary text-center font-semibold">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
