import {
	iconFacebook,
	iconInstagram,
	iconPinterest,
	iconTwitter,
	logo,
} from "../images/images"

export default function Footer() {
	return (
		<footer>
			<div className="container">
				<img className="logo-light" src={logo} alt="Shortly logo" />
				<div>
					<div>
						<ul>
							<li className="footer-title">Features</li>
							<li>Link Shortening</li>
							<li>Branded Links</li>
							<li>Analytics</li>
						</ul>
					</div>
					<div>
						<ul>
							<li className="footer-title">Resources</li>
							<li>Blog</li>
							<li>Developers</li>
							<li>Support</li>
						</ul>
					</div>
					<div>
						<ul>
							<li className="footer-title">Company</li>
							<li>About</li>
							<li>Our Team</li>
							<li>Careers</li>
							<li>Contact</li>
						</ul>
					</div>
				</div>
				<div>
					<ul>
						<li>
							<img src={iconFacebook} alt="" />
						</li>
						<li>
							<img src={iconTwitter} alt="" />
						</li>
						<li>
							<img src={iconPinterest} alt="" />
						</li>
						<li>
							<img src={iconInstagram} alt="" />
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
