export const initialState = {
    user: null,
    playlists: [],
    playing: [],
    item: null,
    //token: "BQDG4lly51lvAd-yCrvX9MT91J9-0QtOjDutXIBbejrhp6fPJYIOxpZBSLRzvkZMAZnn-OB38Aq61BaVsLIlwe5dOjVCLqTSmYVvTLBrhjGeo2_LAZ9320bjwlZ6A-_rQvyVxRXhx0l4RX8CmP-V1uNyQu6vaioXynX-QQthV7Gvsb_g"
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        case "SET_SONG_PLAYING":
            return {
                ...state,
                playing: action.playing
            }
        default:
            return state;
    }
};

export default reducer;