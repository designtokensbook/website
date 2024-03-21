import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Phase } from "@/types/data";

export default function PhaseSection({ id, theme, phases }: Phase) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem key={id} value={id}>
        <AccordionTrigger>{theme}</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-8">
            {phases.map((phase) => (
              <li key={phase} className="text-muted-foreground mb-3">
                {phase}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
