import fetch from 'isomorphic-fetch';

// Post request to add new staff member
let addStaff = (username, password, firstName, midName, lastName, email, phone, street, city, state, zip) => {
    return (dispatch) => {
        let url = '/staff';
        let request = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: username,
                password: password,
                firstName: firstName,
                midName: midName,
                lastName: lastName,
                email: email,
                phone: phone,
                street: street,
                city: city,
                state: state,
                zip: zip
            })
        };
        return fetch(url, request)
        .then((response) => {
            if (response.status < 200 || response.status >= 300) {
                let error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response.json();
        })
        .then((data) => {
            return dispatch ({
                type: 'updateUser',
                data: data
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }
};

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
