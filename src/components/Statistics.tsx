import { iconBrand, iconCustomizable, iconDetailed } from "../images/images"
export default function Statistics() {
	return (
		<div className="container">
			<div>
				<h2>Advanced Statistics</h2>
				<p>
					Track how your links are performing across the web with our
					advanced statistics dashboard.
				</p>
			</div>
			<div className="statistics-card">
				<div className="icon-container">
					<img className="icon-dark" src={iconBrand} alt="" />
				</div>
				<div className="statistics-card-content">
					<h3>Brand Recognition</h3>
					<p>
						Boost your brand recognition with each click. Generic
						links don't mean a thing. Branded links help instil
						confidence in your content.
					</p>
				</div>
			</div>
			<div className="statistics-card">
				<div className="icon-container">
					<img className="icon-dark" src={iconDetailed} alt="" />
				</div>
				<div className="statistics-card-content">
					<h3>Detailed Records</h3>
					<p>
						Gain insights into who is clicking your links. Knowing
						when and where people engage with your content helps
						inform better decisions.
					</p>
				</div>
			</div>
			<div className="statistics-card">
				<div className="icon-container">
					<img className="icon-dark" src={iconCustomizable} alt="" />
				</div>
				<div className="statistics-card-content">
					<h3>Fully Customizable</h3>
					<p>
						Improve brand awareness and content discoverability
						through customizable links, supercharging audience
						engagement.
					</p>
				</div>
			</div>
		</div>
	)
}
