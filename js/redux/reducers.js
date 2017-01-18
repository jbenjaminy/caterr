let initialState = {
	user: {
		username: '',
		details: {},
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
			let accountDetails = action.data.accountDetails || state.user.details;
			let id = action.data.id || state.user.id;
			let status = action.data.status || state.regStatus;
			return Object.assign({}, state, {
				user: {
					username: username,
					details: accountDetails,
					acctType: acctType,
					id: id
				},
				regStatus: status
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