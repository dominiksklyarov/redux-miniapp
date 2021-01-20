import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSong } from "../actions";

const renderList = (songs, dispatch) => {
	return songs.map((song) => {
		return (
			<div
				onClick={() => dispatch(selectSong(song))}
				className="song-list-item"
				key={song.title}
			>
				<div className="song-list-image">
					<img src={song.image} alt="" />
				</div>
				<div className="content">{song.title}</div>
			</div>
		);
	});
};

export const SongList = () => {
	const songs = useSelector((state) => state.songs);
	const dispatch = useDispatch();
	return <div className="song-list">{renderList(songs, dispatch)}</div>;
};
