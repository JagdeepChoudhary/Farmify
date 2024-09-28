import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What types of produce do you offer?
          </AccordionTrigger>
          <AccordionContent>
            We offer a wide variety of seasonal, locally-grown produce including
            vegetables, fruits, and herbs. Our selection changes throughout the
            year based on what's in season.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Are your products organic?</AccordionTrigger>
          <AccordionContent>
            Many of our products are certified organic. We also offer
            conventionally grown produce. Each product is clearly labeled with
            its growing method.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do you offer delivery services?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer local delivery within a 20-mile radius of our farm. We
            also have a pickup option available at our farm stand.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How fresh is your produce?</AccordionTrigger>
          <AccordionContent>
            Our produce is harvested daily to ensure maximum freshness. Most
            items are picked within 24 hours of being sold or delivered.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Do you offer bulk pricing for large orders?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer discounts for bulk orders. Please contact us directly
            for pricing on large quantities.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
