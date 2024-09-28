import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function ReturnPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Return Policy</h1>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Our Guarantee</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We stand behind the quality of our produce. If you're not
              satisfied with your purchase, we're here to make it right.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Return Process</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Contact us within 24 hours of receiving your order.</li>
              <li>Explain the issue with your product.</li>
              <li>We may ask for photos to better understand the problem.</li>
              <li>If approved, we'll arrange for a replacement or refund.</li>
            </ol>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Eligible Items</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Most fresh produce items are eligible for return or refund if they
              don't meet our quality standards upon delivery. Non-perishable
              items can be returned within 7 days of purchase if unopened and in
              original condition.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Non-Returnable Items</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Custom or special orders</li>
              <li>Perishable items after 24 hours of delivery</li>
              <li>Sale items</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Refunds</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Once we receive and inspect the returned item, we will notify you
              of the approval or rejection of your refund. If approved, your
              refund will be processed, and a credit will automatically be
              applied to your original method of payment within 3-5 business
              days.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
