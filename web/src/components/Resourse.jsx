import { useState } from "react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import Menubar from "./Header";
import { Footer } from "./Footer";

// Mock data
const equipmentListings = [
  {
    id: 1,
    type: "Tractor",
    description: "John Deere 5075E",
    rate: 100,
    unit: "day",
    owner: "Farmer John",
  },
  {
    id: 2,
    type: "Harvester",
    description: "New Holland TC5.30",
    rate: 150,
    unit: "day",
    owner: "Farmer Sarah",
  },
];

const landListings = [
  {
    id: 1,
    size: 10,
    unit: "acres",
    location: "Springfield",
    rate: 500,
    period: "month",
    owner: "Farmer Mike",
  },
  {
    id: 2,
    size: 5,
    unit: "hectares",
    location: "Greenville",
    rate: 300,
    period: "month",
    owner: "Farmer Emma",
  },
];

const laborListings = [
  {
    id: 1,
    type: "Harvesting",
    workers: 5,
    duration: "2 weeks",
    rate: 15,
    unit: "hour",
    requester: "Farmer Alex",
  },
  {
    id: 2,
    type: "Planting",
    workers: 3,
    duration: "1 week",
    rate: 12,
    unit: "hour",
    requester: "Farmer Lisa",
  },
];

export default function FarmerResourcesPage() {
  const [activeTab, setActiveTab] = useState("lease-equipment");

  const handleSubmit = () => {
    event.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  const handleBid = () => {
    // Handle bidding logic
    console.log(`Bid placed for ${type} with id ${id}`);
  };

  return (
    <>
      <Menubar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Farmer Resource Management</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="lease-equipment">Lease Equipment</TabsTrigger>
            <TabsTrigger value="lease-land">Lease Land</TabsTrigger>
            <TabsTrigger value="hire-labor">Hire Labor</TabsTrigger>
            <TabsTrigger value="my-listings">My Listings</TabsTrigger>
          </TabsList>

          <TabsContent value="lease-equipment">
            <Card>
              <CardHeader>
                <CardTitle>Lease Your Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="equipment-type">Equipment Type</Label>
                      <Input
                        id="equipment-type"
                        placeholder="e.g., Tractor, Harvester"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="equipment-description">Description</Label>
                      <Textarea
                        id="equipment-description"
                        placeholder="Provide details about your equipment"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="equipment-rate">Rate</Label>
                      <div className="flex space-x-2">
                        <Input
                          id="equipment-rate"
                          type="number"
                          placeholder="Enter rate"
                        />
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hour">Per Hour</SelectItem>
                            <SelectItem value="day">Per Day</SelectItem>
                            <SelectItem value="week">Per Week</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button type="submit">List Equipment</Button>
              </CardFooter>
            </Card>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Available Equipment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipmentListings.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle>{item.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                    <p className="font-semibold mt-2">
                      ${item.rate} per {item.unit}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Owner: {item.owner}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Place Bid</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Place a Bid</DialogTitle>
                          <DialogDescription>
                            Enter your bid for this equipment.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="bid-amount" className="text-right">
                              Bid Amount
                            </Label>
                            <Input
                              id="bid-amount"
                              type="number"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                              htmlFor="bid-duration"
                              className="text-right"
                            >
                              Duration
                            </Label>
                            <Input
                              id="bid-duration"
                              placeholder="e.g., 3 days"
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            onClick={() => handleBid(item.id, "equipment")}
                          >
                            Submit Bid
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="lease-land">
            <Card>
              <CardHeader>
                <CardTitle>Lease Your Land</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="land-size">Land Size</Label>
                      <div className="flex space-x-2">
                        <Input
                          id="land-size"
                          type="number"
                          placeholder="Enter size"
                        />
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="acres">Acres</SelectItem>
                            <SelectItem value="hectares">Hectares</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="land-location">Location</Label>
                      <Input id="land-location" placeholder="Enter location" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="land-rate">Rate</Label>
                      <div className="flex space-x-2">
                        <Input
                          id="land-rate"
                          type="number"
                          placeholder="Enter rate"
                        />
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="month">Per Month</SelectItem>
                            <SelectItem value="year">Per Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button type="submit">List Land</Button>
              </CardFooter>
            </Card>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Available Land</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {landListings.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle>
                      {item.size} {item.unit} in {item.location}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mt-2">
                      ${item.rate} per {item.period}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Owner: {item.owner}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Place Bid</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Place a Bid</DialogTitle>
                          <DialogDescription>
                            Enter your bid for this land.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                              htmlFor="land-bid-amount"
                              className="text-right"
                            >
                              Bid Amount
                            </Label>
                            <Input
                              id="land-bid-amount"
                              type="number"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                              htmlFor="land-bid-duration"
                              className="text-right"
                            >
                              Duration
                            </Label>
                            <Input
                              id="land-bid-duration"
                              placeholder="e.g., 6 months"
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button onClick={() => handleBid(item.id, "land")}>
                            Submit Bid
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hire-labor">
            <Card>
              <CardHeader>
                <CardTitle>Post Labor Request</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="labor-type">Labor Type</Label>
                      <Input
                        id="labor-type"
                        placeholder="e.g., Harvesting, Planting"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="workers-needed">
                        Number of Workers Needed
                      </Label>
                      <Input
                        id="workers-needed"
                        type="number"
                        placeholder="Enter number of workers"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="labor-duration">Duration</Label>
                      <Input id="labor-duration" placeholder="e.g., 2 weeks" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="labor-rate">Rate</Label>
                      <div className="flex space-x-2">
                        <Input
                          id="labor-rate"
                          type="number"
                          placeholder="Enter rate"
                        />
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hour">Per Hour</SelectItem>
                            <SelectItem value="day">Per Day</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button type="submit">Post Labor Request</Button>
              </CardFooter>
            </Card>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Labor Requests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {laborListings.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle>{item.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {item.workers} workers needed for {item.duration}
                    </p>
                    <p className="font-semibold mt-2">
                      ${item.rate} per {item.unit}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Requested by: {item.requester}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Place Bid</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Place a Bid</DialogTitle>
                          <DialogDescription>
                            Enter your bid for this labor request.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                              htmlFor="labor-bid-amount"
                              className="text-right"
                            >
                              Bid Amount
                            </Label>
                            <Input
                              id="labor-bid-amount"
                              type="number"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                              htmlFor="labor-bid-workers"
                              className="text-right"
                            >
                              Workers Available
                            </Label>
                            <Input
                              id="labor-bid-workers"
                              type="number"
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button onClick={() => handleBid(item.id, "labor")}>
                            Submit Bid
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-listings">
            <h2 className="text-2xl font-semibold mb-4">My Listings</h2>
            <p>Your active listings and requests will appear here.</p>
            {/* Add components to display user's listings and requests */}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  );
}
