import React from "react";
import { useSelector } from "react-redux";

export const SongDetail = () => {
	const selectedSong = useSelector((state) => state.selectedSong);
	return !selectedSong ? (
		<div>You have to select a song!</div>
	) : (
		<div className="song-detail-container">
			<img src={selectedSong.song.image} alt="" />
			<div className="song-detail-container-info">
				<h3>Details for:</h3>
				<p>Title: {selectedSong.song.title}</p>
				<p>Duration: {selectedSong.song.duration}</p>
			</div>
		</div>
	);
};
