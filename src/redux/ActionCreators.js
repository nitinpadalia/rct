import * as ActionTypes from './ActionTypes';
import { baseURL } from '../shared/configs';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseURL + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        throw error;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
        console.log('post comments', error.message);
        alert('Your comment could not be posted\nError: ' + error.message);
    });
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseURL + 'dishes')
    .then(response => {
        if (response.ok){
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': '+ response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    }
    )
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILEd,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseURL + 'comments')
    .then(response => {
        if (response.ok){
            return response;
        } else {
            var error = new Error('Error '+ response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error=> {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
}

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());

    return fetch(baseURL + 'promotions')
    .then (response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

/* Assignement 4 */

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());

    return fetch(baseURL + 'leaders')
    .then (response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addLeaders(promos)))
    .catch(error => dispatch(leadersFailed(error.message)));
};

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const showFeedback = (feedback) => ({
    type: ActionTypes.SUBMIT_FEEDBACK,
    payload: feedback
});

export const postFeedback = (feedback) => (dispatch) => {
    const feedbackval = {...feedback, date: new Date()};

    return fetch(baseURL + 'feedback', {
        method: 'POST',
        body: JSON.stringify(feedbackval),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        throw error;
    }
    )
    .then(response => response.json())
    .then(response => dispatch(showFeedback(response)))
    .then(response => {
        console.log('Thanks! for your feedback: '+ response);
        alert('Thank you for your feedback! \n' + JSON.stringify(response.payload));
    })
    .catch(error => {
        console.log('Submit Feedback', error.message);
        alert('Your Feedback could not be posted\nError: ' + error.message);
    });
}