import { combineReducers } from "redux";

export const songsReducer = () => {
	return [
		{
			title: "Savage!",
			duration: "4:05",
			image:
				"https://images.unsplash.com/photo-1587502537104-aac10f5fb6f7?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
		},
		{
			title: "Rockstar",
			duration: "3:27",
			image:
				"https://images.unsplash.com/photo-1559825481-12a05cc00344?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80",
		},
		{
			title: "The Bigger Picture",
			duration: "3:15",
			image:
				"https://images.unsplash.com/photo-1513006666308-523b5f33c3dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
		},
		{
			title: "Do It",
			duration: "4:25",
			image:
				"https://images.unsplash.com/photo-1543321269-9d86d3680e1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
		},
		{
			title: "Toosie Slide",
			duration: "1:37",
			image:
				"https://images.unsplash.com/photo-1554965393-4e7e08282f52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
		},
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	} else {
		return selectedSong;
	}
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
