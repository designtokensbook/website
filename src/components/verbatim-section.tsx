import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Quote } from "./ui/quote";

const verbatims = [
	{
		id: "culture",
		question: "La mise en place des Design Tokens nécessite-t-elle une culture spécifique ?",
		answer: [
			<Quote
				author="Margaux Marie"
				description="Design Ops Manager, TheFork"
				quote="Mettre en place des tokens c’est bien, mais pour
				que cela soit vraiment utile et efficace, il faut que
				les utilisateurs en comprennent le principe, le
				fonctionnement et la valeur. Cela ne s’improvise
				pas, c’est aussi important qu’ils se sentent
				autonomes et en contrôle dans la gestion et
				l’évolution de ceux-ci. Donc qui dit ”tokens”, dit
				communication, formation et accompagnement !
				Car il s’agit un langage commun et une façon
				de concevoir à la croisée du design et de la tech,
				cela oblige à collaborer, échanger, comprendre
				le besoin et la perception des autres métiers et
				rationaliser ensemble."
			/>,
			<Quote
				author="Christophe de CANTELOUBE"
				description="Staff Frontend Engineer, OpenClassrooms"
				quote="Les tokens ont permis aux équipes design et dev de
				parler le même language. Nommer un token avec
				une sémantique liée à son utilisation a également
				aidé les développeurs à mieux comprendre les
				décisions design, d’utiliser un token plutôt qu’un
				autre et donc a facilité les passations."
			/>,
			<Quote
				author="(Sam I Am) Samantha Gordashko"
				description="UX Designer & Community Manager, Tokens Studio"
				quote="Les Design Tokens ne sont pas simplement un
				outil pour les designers ou les développeurs
				individuellement, mais une solution collaborative
				qui comble le fossé entre le design et l’ingénierie.
				Ils sont particulièrement avantageux pour les
				équipes dédiées à l’amélioration de leur flux de
				travail. En adoptant les Design Tokens, ces équipes
				peuvent rationaliser leurs processus, améliorer
				la communication et travailler de manière plus
				efficace ensemble."
			/>,
			<Quote
				author="Sabrina Vigil & Laurent Thiebault"
				description="Staff Product Designer & Engineering Manager - Design System, Decathlon"
				quote="La priorité pour nos designers est de se concentrer
				sur la création d’expériences de qualité [...] une
				compréhension fine de la façon d’écrire des
				tokens n’est pas un critère de recrutement pour
				nos designers produits. Cette compétence est
				spécifique aux designers du design system et aux
				contributeurs avancés."
			/>,
			<Quote
				author="Christophe de CANTELOUBE"
				description="Staff Frontend Engineer, OpenClassrooms"
				quote="Les tokens ont permis aux équipes design et dev de
				parler le même language. Nommer un token avec
				une sémantique liée à son utilisation a également
				aidé les développeurs à mieux comprendre les
				décisions design, d’utiliser un token plutôt qu’un
				autre et donc a facilité les passations."
			/>,
		], 
	},
	{
		id: "maturity",
		question: "Y a t-il un degré de maturité nécessaire pour utiliser les Design Tokens ?",
		answer: [
			<Quote
				author="Louis Chenais"
				description="Co-Founder & Chief Evangelist, Specify"
				quote="Avant de créer un système de tokens je pense
				qu’il faut déjà être à l’aise avec le principe des
				composants. Prenons comme référence la taxonomie
				Atomic Design. Si le plus petit des composants
				est un atome, alors le plus grand des tokens n’est
				pas plus grand qu’un électron. Pour maîtriser
				l’infiniment petit, il faut d’abord maîtriser les
				concepts plus généraux."
			/>,
			<Quote
				author="Christophe de CANTELOUBE"
				description="Staff Frontend Engineer, OpenClassrooms"
				quote="Quelque soit la taille et configuration de
				l’entreprise, les design tokens sont pertinents dès le
				début d’un projet de design system. Même si vous
				n’allez pas au bout de la démarche tout de suite,
				ils vous apporteront une logique systémique et
				de scalabilité autour de l’usage, qui deviendra la
				fondation de votre design system."
			/>,
			<Quote
				author="Ben Callahan"
				description="Founder, Sparkbox"
				quote="Pour utiliser les tokens dans votre travail sur un
				produit, vous ne devriez vraiment pas avoir à
				faire grand-chose de différent de ce que vous faites
				aujourd’hui. L’utilisation de convertiseurs (comme
				Style Dictionary) signifie que les valeurs stockées
				dans les tokens peuvent être « transformées » pour
				être utilisées dans vos outils/cadres/plateformes
				spécifiques, etc.
				La partie difficile concernant les tokens est de se
				mettre d’accord sur la structure, le nommage et le
				processus de prise en main, de maintenance et de
				modification de ceux-ci."
			/>,
			<Quote
				author="Edgar Lechaudel"
				description="Design Lead, Thales"
				quote="Intégrer un système de Design Tokens est une réelle
				responsabilité qui demande un gros investissement
				de départ et une forte capacité à s’adapter sur
				le long terme. Je suis convaincu que cela peut
				faire monter en qualité des équipes et impacter
				positivement la culture design de l’entreprise,
				encore faut-il que ce soit mis en parallèle des
				risques à prendre et des efforts à investir. Même
				si les bénéfices théoriques des Design Tokens sont
				identifiés, le sujet est encore très jeune."
			/>,
		],
	},
	{
		id: "stakeholders",
		question: "Comment vendre les Design Tokens à vos parties prenantes ?",
		answer: [
			<Quote
				author="Louis Chenais"
				description="Co-Founder & Chief Evangelist, Specify"
				quote="Les stakeholders ne sont peut-être pas adepte
				du design mais ils sont adeptes de leurs objectifs
				business au quotidien. Une bonne manière de
				promouvoir l’intérêt des design tokens serait de
				leur montrer leur impact positif d’un point de vue
				business."
			/>,
			<Quote
				author="Margaux Marie"
				description="Design Ops Manager, TheFork"
				quote="Cela va généralement concerner, le temps gagné,
				la diminution de l’effort à produire et la facilité
				à opérer des changements en cascade dans les
				interfaces. Pour en apporter la preuve, on peut
				donc se pencher sur l’évaluation des ressources
				investies (humaines et temporelles) et des études
				plus qualitatives sur la satisfaction de ceux qui les
				utilisent.
				Au quotidien, le bénéfice peut être visible assez
				rapidement. Un exemple concret qui a eu son
				petit effet “wouah” est quand nous avons présenté
				aux designers et product managers la possibilité
				de générer des maquettes en light mode et de les
				convertir en dark mode en un seul clic, simplement
				grâce à la création et l’utilisation des tokens
				sémantiques."
			/>,
			<Quote
				author="Ben Callahan"
				description="Founder, Sparkbox"
				quote={[`La manière de vendre quoi que ce soit est la même :
					comprendre ce qu’ils valorisent et raconter l’histoire de
					manière à répondre à leurs besoins. Selon moi, les tokens
					sont excellents pour quatre choses principales :`,
					<ol><li>
					Avoir une seule source de vérité pour les décisions de
					design signifie que vous pouvez faire confiance au fait
					que là où ces tokens sont utilisés, il y aura une cohérence
					dans les décisions de design elles-mêmes.</li>
					<li>Avoir des tokens utilisés dans toute votre organisation
					signifie que vous pouvez faire quelques changements à un
					endroit et voir ces changements se répercuter dans vos
					produits.</li>
					<li>Avoir une architecture appropriée de couches de tokens
					signifie que vous pouvez facilement thématiser vos
					produits en échangeant des couches de valeurs de tokens.</li>
					<li>Avoir le pipeline d’outils de tokens en place signifie que
					vous pouvez fournir des décisions de design fiables à tout
					outil, cadre ou plateforme utilisé pour livrer des produits
					numériques.</li>
					</ol>,
					`Presque toujours, un ou deux de ces avantages peuvent
					aider n’importe quelle partie prenante à atteindre quelques-
					uns de ses objectifs. Votre travail est de raconter l’histoire
					adéquate.`]}
			/>,
		],
	},
	{
		id: "revolution",
		question: "Les Design Tokens sont une évolution ou une révolution du design ?",
		answer: [
			<Quote
				author="James Nash"
				description="Design System Engineer, Investec - 
				Format Specification Editor, DTCG"
				quote="Les design tokens sont plus une méthodologie qu’une simple épice
				pour variables.
				Les design tokens nous ont également permis d’introduire des
				thèmes, des modes [...], des densités d’informations variables et
				plus encore dans nos interface.
				Ils ont ouvert la porte à de nouvelles fonctionnalités comme les
				schémas de couleur dynamiques dans Google Material Design 3,
				Adobe Spectrum 2 et d’autres. Cela permet un nouveau niveau de
				personnalisation de l’UI par les utilisateurs finaux qui aurait été
				très difficile à réaliser autrement.
				Les design tokens révolutionnent la manière dont les équipes
				conçoivent et construisent des interfaces."
			/>,
			<Quote
				author="Julien Riveron"
				description="Software Engineer, TheFork"
				quote="La révolution, vient de la mise en commun d’un outil 
				qui permet de partager, un language, des décisions, 
				et tous cela de façon industrialisé.Avec l’arrivée des 
				tokens et son intégration dans nos outils, il existe maintenant 
				une API commune pour partager et manipuler ces décisions 
				sur toutes la chaine de conception."
			/>,
			<Quote
				author="(Sam I Am) Samantha Gordashko"
				description="UX Designer & Community Manager, Tokens Studio"
				quote="Les Design Tokens sont un outil puissant qui donne du
				pouvoir aux designers et aux développeurs. Ils nous
				permettent de capturer et d’exprimer les décisions de
				conception, ouvrant ainsi la voie à des flux de travail
				plus automatisés."
			/>,
			<Quote
				author="Louis Chenais"
				description="Co-Founder & Chief Evangelist, Specify"
				quote="Au même titre que les composants, les design tokens permettent
				aux équipes produits de s’assurer avec encore plus de précision
				de la bonne expérience finale des utilisateurs. Les développeurs
				avaient déjà pour habitude de travailler avec des variables et les
				designers avec des charte graphique. Les design tokens réunissent
				le meilleur des deux mondes et établissent un langage commun
				entre ces deux métiers qui jusqu’à maintenant ne parlaient pas
				vraiment la même langue."
			/>,
			<Quote
				author="Ben Callahan"
				description="Founder, Sparkbox"
				quote="Quand on réduit les Design Tokens à leur essence, leurs
				fondements n’a rien de nouveau pour les développeurs.
				Ils sont vraiment une bonne pratique d’ingénierie qui
				est reprise dans le processus de conception. Je pense
				qu’encourager des principes comme celui-ci dans des
				disciplines autres que le développement a un impact
				considérable."
			/>,
			<Quote
				author="Thomas Lautrédou"
				description="Lead Design System, TheFork"
				quote="Je ne considère pas les Design Tokens comme une révolution, 
				ce principe est présent depuis très longtemps côté ingénierie. 
				Ils sont plus une harmonisation des méthodes de conceptions entre les métiers. 
				Les Design Tokens sont une révolution dans le sens du langage partagé, 
				ils deviennent une pierre de rosette pour parler de tous les aspects UI 
				et permettent au Design et à l’ingénierie de se comprendre et de s’adapter ensemble, 
				c’est donc un pas vers la conception commune plutôt qu’en silo. 
				Un des grands enjeux des Design Tokens reste selon moi de trouver le juste milieu, 
				en produire trop avec trop d’imbrication risque de bloquer la flexibilité 
				et scalabilité des Design System, mais en avoir trop peu risque de 
				créer des inconsistances majeurs dans un produit."
			/>,
			<Quote
				author="Edgar Lechaudel"
				description="Design Lead, Thales"
				quote="Bien que la puissance des variables en
				programmation ne soit pas nouvelle, intégrer ces
				concepts et fonctionnalités dans nos outils de design
				révolutionne notre industrie. Nos outils de design
				ne sont pas encore à niveau, mais les organisations
				munies d’un Design System commencent déjà à
				modéliser, vulgariser et promouvoir ce nouveau
				modèle de pensée et ses pratiques."
			/>,
		],
	},
	{
		id: "method",
		question: "En quoi les Design Tokens sont plus une méthode que de simples variables ?",
		answer: [
			<Quote
				author="Louis Chenais"
				description="Co-Founder & Chief Evangelist, Specify - 
				Format Specification Editor, DTCG"
				quote="Un design token n’est ni plus ni moins qu’une décision
				design appliquée à un contexte précis. C’est le
				designer qui défini le système et qui devra s’assurer en
				étroite collaboration avec le développeur de sa bonne
				implémentation dans une variété de contextes (modes,
				marques, produits...). Les design tokens sont à la fois des
				décisions design mais également leur bonne implémentation."
			/>,
			<Quote
				author="Christophe de CANTELOUBE"
				description="Staff Frontend Engineer, OpenClassrooms"
				quote="Quelque soit l’outil utilisé, les design tokens sont
				une bonne méthode pour gagner en précision et en
				clarté sur les différents usages faits des couleurs,
				typographies, espacements, radius, etc sur une
				application ou une plateforme.
				Elles forcent des choix UX mieux justifiés avec un
				champs d’options possibles réduit, une meilleure
				cohérence des maquettes, et une collaboration
				accrue entre designers et développeurs."
			/>,
			<Quote
				author="(Sam I Am) Samantha Gordashko"
				description="UX Designer & Community Manager, Tokens Studio"
				quote="Les Design tokens sont investissement dans la
				capture des décisions en amont permet non seulement
				d’économiser du temps et des ressources, mais aussi
				de se concentrer sur des aspects plus créatifs de notre
				travail."
			/>,
		],
	},
	{
		id: "components",
		question: "Quand doit-on introduire les Design Tokens au niveau des composants ?",
		answer: [
			<Quote
				author="Brad Frost"
				description="Atomic Design Creator - 
				Principal and Design System Consultant, Big Medium"
				quote={[
					`Nous sommes parvenus à une architecture de Design Tokens
					à trois niveaux :`,<ul><li>
					Le niveau 1 définit les propriétés de conception abstraites,
					qui servent de matières premières pour le langage visuel
					de l’interface utilisateur.</li>
					<li>Le niveau 2 constitue une couche sémantique qui associe
					les Design Tokens de niveau 1 à une utilisation de
					générique au sein de l’interface utilisateur.</li>
					<li>Au niveau 3 ils sont spécifiques aux composants et sont
					mis en correspondance avec les Design Tokens de niveau 2.</li></ul>,
					`Nous avons constaté que les Design Tokens de niveau des
					composants ne devraient être utilisés qu’avec parcimonie.
					Ils sont utiles pour les composants très marqués, comme
					les boutons, qui peuvent avoir besoin de différer du
					niveau sémantiques, notamment à travers les thèmes. Ils
					peuvent également être utiles pour de grandes catégories
					de composants, comme la définition de Design Tokens
					spécifiques pour contrôler les bordures des champs de
					formulaire.`
				]}
			/>,
			<Quote
				author="Thomas Lautrédou"
				description="Lead Design System, TheFork"
				quote="Les Design Tokens de composant ont été un moyen pour
				nous d’assurer la centralisation de certaines propriétés à
				un seul endroit et ce de manière homogène. Cependant,
				on peut rapidement imaginer le désagrément pour les
				utilisateurs d’avoir à piocher parmi de trop nombreux
				tokens, c’est pourquoi nous avons décidé de ne pas les
				exposer aux Product Designers. Ils sont surtout une
				manière d’uniformiser, de centraliser les propriétés tout
				en étant capables de les adapter rapidement."
			/>,
			<Quote
				author="Sabrina Vigil & Laurent Thiebault"
				description="Staff Product Designer & Engineering Manager - 
				Design System, Decathlon"
				quote="Le passage au niveau des composants dans
				l’utilisation des Design Tokens dépend de divers
				facteurs, notamment de la complexité du Design
				System et de la nécessité de maintenir une
				cohérence visuelle à un niveau granulaire. Cela
				permet une gestion plus efficace de la conception et
				de la maintenance, en garantissant une cohérence
				visuelle à tous les niveaux de l’application."
			/>,
		],
	},
	{
		id: "risks",
		question: "Quels seraient les risques des Design Tokens que vous pouvez identifier ?",
		answer: [
			<Quote
				author="James Nash"
				description="Design System Engineer, Investec - 
				Format Specification Editor, DTCG"
				quote="Bien qu’il puisse être une bonne idée d’introduire des
				éléments comme une couche sémantique de tokens avant
				d’avoir réellement besoin de thème ou de modes, cela est
				risqué de le faire avant d’avoir des besoins clairs. Vous
				finiriez par nommer et organiser vos tokens sur la base
				d’hypothèses qui peuvent ne pas être correctes lorsque
				vous les mettez en œuvre.
				Je préconise de garder les choses aussi simples que
				possible et d’ajouter de la complexité uniquement lorsque
				vous en avez besoin."
			/>,
			<Quote
				author="Ben Callahan"
				description="Founder, Sparkbox"
				quote="Le plus grand risque avec les tokens survient lorsqu’une
				organisation automatise et met en œuvre tout cela mais
				n’intègre pas le processus nécessaire entre les humains
				pour bien le maintenir. Avec tout ce pouvoir vient une
				grande responsabilité. Définir et s’en tenir aux processus
				pour la modification des tokens, l’ajout de thèmes ou
				de modes, la dépréciation des tokens, etc. c’est la partie
				difficile."
			/>,
			<Quote
				author="Margaux Marie"
				description="Design Ops Manager, TheFork"
				quote="Nous avons expérimenté la notion de “Brand champion” côté
				Produit, pour être en contact rapproché avec le département
				“marque” et assurer la cohérence ainsi que la bonne
				communication entre les équipes. En parallèle, certains membres
				du marketing font partie de la gouvernance hybride du Design
				System. Nous favorisons le co-design [...] et nous nous appuyons
				sur un ensemble de rituels mis en place, mais aussi des canaux
				privilégiés ou encore des ateliers réunissant produit et marketing."
			/>,
			<Quote
				author="James Nash"
				description="Design System Engineer, Investec - 
				Format Specification Editor, DTCG"
				quote="Les Design Tokens devraient être conjointement gérés et
				maintenus par toutes les disciplines. Une grande partie de leur
				valeur réside dans la création d’un langage commun au sein de
				l’équipe Design System. Les designers, les développeurs et d’autres
				peuvent avoir tendance à préférer différents noms et conventions,
				donc la seule façon de créer un alignement et une compréhension
				partagée est de collaborer.
				De plus, les outils de design comme Figma ont tendance à être
				en retard sur ce qui est possible sur les plateformes cibles, donc
				quand seuls les designers gèrent les tokens via leurs outils,
				vous pouvez passer à côté d’opportunités. [...]. Considérez des
				choses comme les espaces colorimétriques modernes, les tokens
				fonctionnels (où une valeur est calculée dynamiquement en
				fonction des autres), et plus encore. Vous ne pouvez actuellement
				pas faire ces choses dans tous les outils de design."
			/>,
			<Quote
				author="Estelle Pelleterat De Borde"
				description="Design System Lead, Thales"
				quote="Le mode de gouvernance est lié à la taille et à la complexité de
				l’organisation cible. Il est intéressant de se calquer sur les standards
				des Design System: hybride, federated, centralized, solitary."
			/>,
		],
	},
	{
		id: "innovation",
		question: "Quels sont les usages les plus originaux ou innovants des Design Tokens ?",
		answer: [
			<Quote
				author="Louis Chenais"
				description="Co-Founder & Chief Evangelist, Specify - 
				Format Specification Editor, DTCG"
				quote="Un de nos clients chez Specify, une société de transport
				norvégienne, utilise les Design Tokens jusque sur les écrans pour
				afficher les stations dans leurs bus. Etant donné la proximité
				
				entre la création d’interface pour des SaaS et celles des jeux-
				vidéo, je ne serais pas surpris de voir les Design Tokens appliqué à
				
				celui de l’industrie vidéo-ludique.
				Il manque actuellement à définir la gestion des thèmes et des
				nouveaux espaces de couleurs (ex: CIE Lab) dans le standard.
				Les discussions ont commencé mais la complexité du sujet et
				la diversité de pensée des différents acteurs sur le marché nous
				obligent à prendre notre temps."
			/>,
			<Quote
				author="Thomas Lautrédou"
				description="Lead Design System, TheFork"
				quote={[`Les Design Tokens sont à mes yeux toutes les propriétés
					“variabilisés” d’une interface utilisateur. Dans une de mes
					expériences passées, les tokens se manipulaient à un niveau de
					fichier de configuration, ils permettaient de gérer de nombreux
					aspects de l’interface.`, <ul>
						<li>L’affichage: Comme le passage de RTL à LTR, le thème etc.</li>
						<li>Le comportement: Comme le déplacement du focus dans
					l’interface, sur une TV c’est un élément crucial</li>
					<li>Le motion: Harmoniser les transitions, les animations avec
					des courbes de vitesse et temporalités prédéfinies et proposer
					également des “thèmes de vitesses” pour s’adapter au matériel.</li>
					<li>Le son: Élément qui est également important sur TV</li>
					</ul>,
					`En résulte un produit en marque blanche avec des options définies
					et simples à mettre en place. Le client pouvait donc configurer
					son produit comme s’il configurait sa voiture et voir le résultat en
					direct.
					Plus récemment nous pourrions parler également des tokens
					dans les PromptSystem pour les IA génératives qui à mon sens
					vont au fur et à mesure s’intégrer dans les Design System afin
					de permettre à chacun de produire du contenu en accord avec la
					marque.`]}
			/>,
		],
	},
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
