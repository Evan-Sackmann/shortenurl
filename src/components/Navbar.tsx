import ButtonCircular from "./buttons/ButtonCircular"
import { logo } from "../images/images"

export default function Navbar() {
	return (
		<nav>
			<div className="container">
				<img src={logo} alt="Shortly logo" />
				<div>
					<ul>
						<li>Features</li>
						<li>Pricing</li>
						<li>Resources</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>Login</li>
						<li>
							<ButtonCircular content="Sign Up" />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
