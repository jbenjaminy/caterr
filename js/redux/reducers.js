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
		case 'updateUser': {
			let username = action.data.username || state.user.username;
			let acctType = action.data.acctType || state.user.acctType;
			let id = action.data.id || state.user.id;
			return Object.assign({}, state, {
				username: username,
				acctType: acctType,
				id: id
			});
		}
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