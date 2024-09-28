import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Information Collection and Use</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We collect personal information such as name, email address, and
              delivery address when you place an order. This information is used
              to process and deliver your order, and to provide you with updates
              about your purchase.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Data Protection</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information. Your personal information is
              contained behind secured networks and is only accessible by a
              limited number of persons who have special access rights to such
              systems.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We use cookies to help us remember and process the items in your
              shopping cart, understand and save your preferences for future
              visits, and compile aggregate data about site traffic and site
              interaction.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Third-Party Disclosure</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties
              your personally identifiable information. This does not include
              trusted third parties who assist us in operating our website,
              conducting our business, or servicing you, so long as those
              parties agree to keep this information confidential.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Changes to Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
