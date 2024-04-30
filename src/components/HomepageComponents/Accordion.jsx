import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Mince Tech</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam alias, quidem non, ad nulla minima voluptates at asperiores expedita molestias dolorum nihil, rerum ratione quod quo illum molestiae repellendus exercitationem!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What does mince Tech do</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam alias, quidem non, ad nulla minima voluptates at asperiores expedita molestias dolorum nihil, rerum ratione quod quo illum molestiae repellendus exercitationem!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How does MinceTech ensure the security of my transactions?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam alias, quidem non, ad nulla minima voluptates at asperiores expedita molestias dolorum nihil, rerum ratione quod quo illum molestiae repellendus exercitationem!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Can I use GenuinePay for international transactions?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam alias, quidem non, ad nulla minima voluptates at asperiores expedita molestias dolorum nihil, rerum ratione quod quo illum molestiae repellendus exercitationem!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can I link multiple bank accounts or cards to my MinceTech account?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam alias, quidem non, ad nulla minima voluptates at asperiores expedita molestias dolorum nihil, rerum ratione quod quo illum molestiae repellendus exercitationem!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
