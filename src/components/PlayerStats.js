import React, { useState, useEffect } from "react";
import axios from "axios";

function PlayerStats() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://c71bufhvb3.execute-api.us-east-2.amazonaws.com/players"
				);
				setData(response.data);
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Player Stats</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}

export default PlayerStats;
