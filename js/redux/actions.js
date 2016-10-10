import fetch from 'isomorphic-fetch';

// /*----------- FETCH REQUESTS ------------*/
// var fetchPreview = function(level, lesson) {
//   // Sends fetch to retrieve questions from the server connected to DB
//     return function(dispatch) {
//         var url = 'preview/' + level + '/' + lesson;
//         var request = {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }   
//         };
//         return fetch(url, request)
//         // Checks response for error messages outside of normal success range
//         .then(function(response) {
//             if (response.status < 200 || response.status >= 300) {
//                 var error = new Error(response.statusText);
//                 error.response = response;
//                 throw error;
//             }
//             return response;
//         })
//         // returns normal response
//         .then(function(response) {
//             return response.json();
//         })
//         // returns requested questions to reducers
//         .then(function(questions) {
//             return dispatch(fetchPreviewSuccess(questions));
//         })
//         .catch(function(error) {
//             return dispatch(fetchPreviewError(error));
//         });
//     }
// };

// /*----- Fetch Actions -----*/
// /* Fetch Preview */
// var FETCH_PREVIEW_SUCCESS = 'FETCH_PREVIEW_SUCCESS';
// var fetchPreviewSuccess = function(questions) {
//     return {
//         type: FETCH_PREVIEW_SUCCESS,
//         questions: questions
//     };
// };

// var FETCH_PREVIEW_ERROR = 'FETCH_PREVIEW_ERROR';
// var fetchPreviewError = function(error) {
//     return {
//         type: FETCH_PREVIEW_ERROR,
//         error: error
//     };
// };

// /*----------- EXPORTS ----------*/
// exports.fetchPreview = fetchPreview;
// exports.FETCH_PREVIEW_SUCCESS = FETCH_PREVIEW_SUCCESS;
// exports.fetchPreviewSuccess = fetchPreviewSuccess;
// exports.FETCH_PREVIEW_ERROR = FETCH_PREVIEW_ERROR;
// exports.fetchPreviewError = fetchPreviewError;