import ButtonSquare from "./buttons/ButtonSquare"

export default function Shortener() {
	return (
		<div className="container">
			<div>
				<input placeholder="Shorten a link here..." />
				<ButtonSquare content="Shorten It!" />
			</div>
			<div>
				<p>placeholder</p>
				<p>short placeholder</p>
				<ButtonSquare content="Copy" />
			</div>
		</div>
	)
}
