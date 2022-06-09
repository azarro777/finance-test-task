import './Navbar.css';
import logo from '../../assets/img/bars-business-and-finance.svg';

export const Navbar = () => {

	return (
		<div className="navbar">
			<div className="container">
				<img src={logo} alt="logo" className="navbar__logo"/>
				<div className="navbar__header">Finance</div>
			</div>
		</div>
	);
};