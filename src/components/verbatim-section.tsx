import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

const verbatims = [
	{
		id: "item-1",
		question: "Est-ce que les Design Tokens sont réellement une révolution dans le design ?",
		answer: "Our company provides innovative software solutions to help businesses automate their processes and improve operational efficiency.",
	},
	{
		id: "item-2",
		question: "La mise en place des Design Tokens nécessite une culture d’entreprise spécifique ?",
		answer: "You can contact us by sending an email to support@example.com or by calling our customer service number at +1 123-456-7890.", 
	},
	{
		id: "item-3",
		question: "Gérer par la team core ou par les product teams ?",
		answer: "We are open from Monday to Friday, from 9:00 AM to 5:00 PM. Our customer service is available during these hours to assist you.",
	},
	{
		id: "item-4",
		question: "Gouvernance par le Design, la technique ou commun ?",
		answer: "Yes, we accept product returns within 30 days of purchase, provided the product is in its original condition. Please refer to our return policy for more information.",
	}
];

export default function VerbatimSection() {
	return (
		<Accordion type="single" collapsible className="w-full">
			{verbatims.map((faqItem) => (
				<AccordionItem key={faqItem.id} value={faqItem.id}>
					<AccordionTrigger>{faqItem.question}</AccordionTrigger>
					<AccordionContent>{faqItem.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
