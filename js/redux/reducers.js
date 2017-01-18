let initialState = {
	user: {
		username: '',
		acctType: '',
		id: '',
	},
	regStatus: 'We look forward to working with you!'
};
function reducer(state=initialState, action) {
	switch(action.type) {
		case 'updateRegStatus': {
			let status = action.data.status || state.regStatus;
			return Object.assign({}, state, {
				regStatus: status
			});
		}
		default: {
	  		return state;
		}
	}
}

export default reducer;