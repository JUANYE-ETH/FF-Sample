import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PlayerStats from "./components/PlayerStats";
import Rankings from "./components/Rankings";

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/rankings">Rankings</Link>
						</li>
						<li>
							<Link to="/player-stats">Player Stats</Link>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="rankings" element={<Rankings />} />
					<Route path="player-stats" element={<PlayerStats />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
