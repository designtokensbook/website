import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

type phasesProps = {
    id: string,
    theme: string,
    phases: string[]
}

export default function PhaseSection({id, theme, phases}: phasesProps ) {
	return (
		<Accordion type="single" collapsible className="w-full">
				<AccordionItem key={id} value={id}>
					<AccordionTrigger>{theme}</AccordionTrigger>
					<AccordionContent>
                        <ul className="list-disc pl-8">
                        {phases.map((phase) => 
                        <li className="text-muted-foreground mb-3">{phase}</li>
                        )}
                        </ul>
                        </AccordionContent>
				</AccordionItem>
		</Accordion>
	)
}
