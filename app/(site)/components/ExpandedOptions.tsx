import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ExpandedOptions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger >Expand</AccordionTrigger>
        <AccordionContent>option1</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
