import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4:05' },
    { title: 'Macarena', duraction: '2:30' },
    { title: 'All star', duraction: '3:15' },
    { title: 'Random song title', duration: '4:55' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type == 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});