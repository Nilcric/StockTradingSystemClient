const log = function (...text) {
    // eslint-disable-next-line
    console.log('[Server]', ...text)
}

const login = function (username, password, success, failure) {
    let accessToken = username + password;
    localStorage['accessToken'] = accessToken;

    if (1) {
        log('Login', 'Success');
        success(accessToken);
    }
    else {
        log('Login', 'Failure');
        failure(404);
    }
}

const getStocks = function (success, failure) {
    if (1) {
        log('Get Stocks', 'Success');
        success(require('./getStocks.json'));
    }
    else {
        log('Get Stocks', 'Failure');
        failure(404);
    }
}

const buy = function (data, success, failure) {
    data['accessToken'] = localStorage['accessToken'];
    if (data) {
        log('Buy', 'Success');
        success(require('./buy.json'));
    }
    else {
        log('Buy', 'Failure');
        failure(404);
    }
}

const getCommandState = function (data, success, failure) {
    data['accessToken'] = localStorage['accessToken'];
    if (data) {
        log('Get Command State', 'Success');
        success(require('./getCommandState.json'));
    }
    else {
        log('Get Command State', 'Failure');
        failure(404);
    }
}

export default {
    login,
    getStocks,
    buy,
    getCommandState
};
