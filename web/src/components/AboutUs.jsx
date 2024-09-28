import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Green Acres Farm</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Green Acres Farm has been a family-owned operation for over 50
              years. Started by our grandparents in 1970, we've grown from a
              small vegetable patch to a 200-acre diverse farm, providing fresh,
              locally-grown produce to our community.
            </p>
            <p>
              Our mission is to grow the highest quality, most delicious produce
              while being stewards of the land and supporters of our local
              community.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Sustainable farming methods</li>
              <li>Crop rotation to maintain soil health</li>
              <li>Integrated pest management</li>
              <li>Water conservation techniques</li>
              <li>Support for local biodiversity</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Meet Our Team</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="John Doe"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-gray-600">Farm Manager</p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="Jane Smith"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="font-semibold">Jane Smith</h3>
            <p className="text-sm text-gray-600">Crop Specialist</p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="Mike Johnson"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="font-semibold">Mike Johnson</h3>
            <p className="text-sm text-gray-600">Sales Manager</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
