import ButtonSquare from "./buttons/ButtonSquare"

export default function Shortener() {
	return (
		<div className="container">
			<div className="shortener-card">
				<input placeholder="Shorten a link here..." />
				<ButtonSquare content="Shorten It!" />
			</div>
			<div className="shortener-card-result">
				<p className="shortener-link-original">placeholder</p>
				<p className="shortener-link-short">short placeholder</p>
				<ButtonSquare content="Copy" />
			</div>
		</div>
	)
}
