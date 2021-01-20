import React from "react";
import { SongList } from "./SongList";
import { SongDetail } from "./SongDetail";

export const App = () => {
	return (
		<div className="song-application">
			<SongList />
			<SongDetail />
		</div>
	);
};
