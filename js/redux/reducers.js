let initialState = {
	user: {
		username: '',
		acctType: '',
		id: ''
	}
};
function reducer(state=initialState, action) {
	switch(action.type) {
		// case '': {
		// 	return Object.assign({}, state, {
		// 	});
		// }
		default: {
	  		return state;
		}
	}
}

export default reducer;