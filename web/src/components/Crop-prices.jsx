import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "..//components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "..//components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "..//components/ui/select";
import { Button } from "..//components/ui/button";
import { Calendar } from "..//components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

const cropPrices = [
  {
    crop: "Tomatoes",
    prices: {
      "Central Mandi": 2.99,
      "North Mandi": 3.15,
      "South Mandi": 2.85,
      "East Mandi": 3.05,
      "West Mandi": 2.95,
    },
  },
  {
    crop: "Corn",
    prices: {
      "Central Mandi": 0.5,
      "North Mandi": 0.55,
      "South Mandi": 0.48,
      "East Mandi": 0.52,
      "West Mandi": 0.51,
    },
  },
  {
    crop: "Apples",
    prices: {
      "Central Mandi": 1.99,
      "North Mandi": 2.1,
      "South Mandi": 1.95,
      "East Mandi": 2.05,
      "West Mandi": 2.0,
    },
  },
  {
    crop: "Lettuce",
    prices: {
      "Central Mandi": 1.5,
      "North Mandi": 1.6,
      "South Mandi": 1.45,
      "East Mandi": 1.55,
      "West Mandi": 1.52,
    },
  },
  {
    crop: "Carrots",
    prices: {
      "Central Mandi": 1.25,
      "North Mandi": 1.3,
      "South Mandi": 1.2,
      "East Mandi": 1.28,
      "West Mandi": 1.26,
    },
  },
];

const mandis = [
  "Central Mandi",
  "North Mandi",
  "South Mandi",
  "East Mandi",
  "West Mandi",
];

export default function CropPricesPage() {
  const [date, setDate] = (useState < Date) | (undefined > new Date());
  const [selectedCrop, setSelectedCrop] =
    (useState < string) | (undefined > undefined);
  const [selectedMandi, setSelectedMandi] =
    (useState < string) | (undefined > undefined);

  const filteredPrices = cropPrices
    .filter(
      (crop) =>
        !selectedCrop || crop.crop.toLowerCase() === selectedCrop.toLowerCase()
    )
    .map((crop) => ({
      ...crop,
      prices: selectedMandi
        ? { [selectedMandi]: crop.prices[selectedMandi] }
        : crop.prices,
    }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Crop Prices</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Price Comparison Tool</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal ${
                    !date && "text-muted-foreground"
                  }`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Crop
            </label>
            <Select onValueChange={setSelectedCrop}>
              <SelectTrigger>
                <SelectValue placeholder="Select crop" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Crops</SelectItem>
                {cropPrices.map((crop) => (
                  <SelectItem key={crop.crop} value={crop.crop.toLowerCase()}>
                    {crop.crop}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Mandi
            </label>
            <Select onValueChange={setSelectedMandi}>
              <SelectTrigger>
                <SelectValue placeholder="Select mandi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Mandis</SelectItem>
                {mandis.map((mandi) => (
                  <SelectItem key={mandi} value={mandi}>
                    {mandi}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Current Prices (per kg)</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Crop</TableHead>
                {Object.keys(filteredPrices[0].prices).map((mandi) => (
                  <TableHead key={mandi}>{mandi}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPrices.map((crop) => (
                <TableRow key={crop.crop}>
                  <TableCell>{crop.crop}</TableCell>
                  {Object.entries(crop.prices).map(([mandi, price]) => (
                    <TableCell key={mandi}>₹{price.toFixed(2)}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
