'use client'
import Feature from "@/components/feature";
import Integration from "@/components/integration";

export default function Home() {

	const nav = [
		{ name: 'Home', path: '#home' },
		{ name: 'About', path: '#about' },
		{ name: 'Features', path: '#features' },
		{ name: 'Scanners', path: '#scanners' },
		{ name: 'Prijzen', path: '#prijzen' },
		{ name: 'Biografie', path: '#bio' },
		{ name: 'Contact', path: '#contact' },
	]


	return (
		<>
			<header>
				<div className="logo-container">
					<img src="logo/comoda-logo1.svg" className="logo" />
					<span>comoda</span>
				</div>
				<nav className="full-nav">
					<ul className="nav-links">
						{nav.map((item, index) => (
							<li key={index}>
								<a className="nav-link" href={item.path}>{item.name}</a>
							</li>
						))}
					</ul>
				</nav>
			</header>

			<main>
				<section id="home" className="jumbotron">
					<h1>Eenvoudig uitlenen, efficiënt beheren<span className="title-blue">Dé slimme oplossing voor uitleendiensten</span></h1>
					<p>Ontworpen met een focus op overzicht, gebruiksgemak en snelheid. Start vandaag nog en ervaar het verschil!</p>
					<div className="jumbotron--callToActions">
						<button className="btn btn-blue" onClick={()=>{scrollTo(0,document.documentElement.scrollHeight)}}>Vraag Offerte</button>
						<button className="btn btn-gray" onClick={()=>{window.open("https://comoda.noahvanleemput.com", "_blank")?.focus()}}>Bekijk Demo</button>
					</div>
					<div className="jumbotron--image">
						<img className="jumbotron--pc" src="images/homepage.png" alt="een visualisatie van een pc scherm" />
						<img className="jumbotron--phone" src="images/phone.png" alt="een visualisatie van een telefoon scherm" />
					</div>
				</section>

				<section id="about">
					<img className="about--image" src="images/detailspage.png" alt="het detail scherm" />
					<div className="about--container">
						<h2>Wat is Comoda</h2>
						<p>Met Comoda wordt het beheren van materialen op hogescholen makkelijker dan ooit. Ons platform biedt studenten de mogelijkheid om snel en eenvoudig reserveringen te maken, terwijl personeel volledige controle houdt over voorraadbeheer en uitleningen. Daarnaast stimuleert Comoda duurzaamheid door ongebruikte materialen binnen de hogeschool te delen.</p>
					</div>
				</section>

				<section id="features">
					<h2>Features</h2>
					<div className="features--container">
						<Feature
							title="Eenvoudig materialen beheren"
							description="Voer snel en efficiënt materialen in, zonder gedoe. Ideaal voor het beheren van grote inventarissen."
							iconName="create" />
						<Feature
							title="Snelle uitleenprocessen"
							description="Minimaliseer het aantal stappen om items uit te lenen of terug te brengen, zowel voor studenten als beheerders."
							iconName="phone-portrait" />
						<Feature
							title="Aanpasbare huisstijl"
							description="Personaliseer de software met jouw eigen branding, inclusief kleuren en lettertypes, voor een professionele uitstraling."
							iconName="brush" />
						<Feature
							title="Gebruiksvriendelijk op elk apparaat"
							description="ónze software is geoptimaliseerd voor gebruik op zowel desktop als mobiel, zodat je overal toegang hebt."
							iconName="desktop" />
						<Feature
							title="Veilige gebruikersauthenticatie"
							description="Integreer eenvoudig met studentenkaarten of andere ID-methoden voor snelle en veilige transacties."
							iconName="people" />
					</div>
				</section>

				<section id="scanners">
					<img className="scanners--image" src="images/scanner.jpeg" alt="scanner" />
					<div className="scanners--container">
						<h2>Scanners</h2>
						<p>Onze uitleendienstsoftware is ontworpen om moeiteloos samen te werken met scanners voor een snelle en efficiënte afhandeling van uitleenprocessen.</p>
						<div className="scanners--integrations">
							<Integration description="Elk uitleenbaar item kan worden voorzien van een unieke barcode.
Scan de barcode met een standaard USB- of draadloze scanner om items direct te registreren bij uitlening of terugbrengen."
								iconName="barcode" />
							<Integration description="Koppel studentenkaarten aan gebruikersprofielen in de software.
Bij elke transactie hoeft alleen de kaart te worden gescand om de gebruiker automatisch te identificeren."
								iconName="id-card" />
							<Integration description="Snelheid: Uitleenprocessen worden versneld.
Nauwkeurigheid: Fouten door handmatige invoer worden geëlimineerd.
Gebruiksgemak: Geen technische kennis nodig om scanners te gebruiken."
								iconName="add-circle" />
						</div>
					</div>
				</section>

				<section id="prijzen">
					<h2>Prijzen</h2>
					<div className="pricing--container">
						<div className="pricing--card">
							<h3>Standaard</h3>
							<ul className="pricing--features">
								<li><strong>Basisfunctionaliteiten voor uitleenbeheer</strong>: Snel items in- en uitlenen met een eenvoudige interface.</li>
								<li><strong>Gebruikersondersteuning</strong>: Standaard klantenservice via e-mail.</li>
								<li><strong>Beheer van gebruikers en materialen</strong>: Voeg gebruikers en materialen toe en beheer deze eenvoudig.</li>
								<li><strong>Compatibiliteit met scanner</strong>s: Ondersteunt standaard barcodescanners en studentenkaartintegratie.</li>
								<li><strong>Mobiele en desktopversie</strong>: Toegang op elk apparaat.</li>
								<li><strong>Overzichtelijke rapportage</strong>: Basisstatistieken over gebruik en uitleenactiviteiten.</li>
							</ul>
							<p>300-400€<span className="pricing--divider">/jaar</span></p>
						</div>
						<div className="pricing--card pricing-blue">
							<h3>Premium</h3>
							<h4>Inclusief alle features van het Standaard abonnement, plus:</h4>
							<ul className="pricing--features">
								<li><strong>Aanpasbare huisstijl</strong>: Pas kleuren, lettertypes en logo's aan om de software in jouw branding te integreren.</li>
								<li><strong>Uitgebreide rapportage</strong>: Geavanceerde data-analyse en exportmogelijkheden.</li>
								<li><strong>Prioritaire ondersteuning</strong>: Snelle klantenservice via e-mail en telefoon.</li>
								<li><strong>Whitelabel-optie</strong>: Toon geen branding van de ontwikkelaar, alleen die van jouw organisatie.</li>
							</ul>
							<p>500-600€<span className="pricing--divider">/jaar</span></p>
						</div>
					</div>
				</section>

				<section id="bio">

					<div className="bio--container">
						<h2>Biografie</h2>
						<img src="images/me_me_me_pfp.jpg" alt="" />
						<p>Ik ben Noah Van Leemput, een Grafische en Digitale Media student aan de AP Hogeschool in Antwerpen. Ik heb Comoda gemaakt voor de effiecientie en overzichtelijkheid van onze huidige uitleendienst te verhogen en frustraties onder studenten te verminderen.</p>
						<button className="btn btn-blue" onClick={()=>{window.open("https://noahvanleemput.com", "_blank")?.focus()}}>portfolio</button>
					</div>
				</section>

				<section id="contact">
					<h2>Contact</h2>
					<div className="contact--container">
						<form className="two-column-form">
							<div>
								<label htmlFor="name">Naam</label>
								<input type="text" id="name" name="name" required />
							</div>
							<div>
								<label htmlFor="email">Email</label>
								<input type="email" id="email" name="email" required />
							</div>
							<div>
								<label htmlFor="phone">Telefoon</label>
								<input type="tel" id="phone" name="phone" required />
							</div>
							<div>
								<label htmlFor="gender">Voorvoegsel</label>
								<input type="text" id="gender" name="gender" />
							</div>
							<div>
								<label htmlFor="organization">organization</label>
								<input type="text" id="organization" name="organization" required />
							</div>
							<div>
								<label htmlFor="website">Website</label>
								<input type="text" id="website" name="website" required />
							</div>
							<div className="full-width">
								<label htmlFor="message">Bericht</label>
								<textarea id="message" name="message" required></textarea>
							</div>
							<div className="full-width">
								<button type="submit" className="btn btn-white">Verzend</button>
							</div>
						</form>
					</div>
				</section>
			</main>
			<footer>
				<p>© 2024 COMODA. All Rights Reserved</p>
			</footer>
		</>
	);
}
