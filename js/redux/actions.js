import fetch from 'isomorphic-fetch';

// Updates status message on registration page
let updateRegStatus = (newMessage) => {
    return {
        type: 'updateRegStatus',
        data: {
        	status: newMessage
        }
    };
};

exports.updateRegStatus = updateRegStatus;
