import Navbar from "./Navbar"
import { working } from "../images/images"
import ButtonCircular from "./buttons/ButtonCircular"
export default function Header() {
	return (
		<div className="header">
			<Navbar />
			<div className="container">
				<img src={working} alt="" />
				<h1>More than just shorter links</h1>
				<p>
					Build your brand's recognition and get detailed insights on
					how your links are performing.
				</p>
				<ButtonCircular content="Get Started" />
			</div>
		</div>
	)
}
