const log = function (...text) {
    // eslint-disable-next-line
    console.log('[Server]', ...text)
}

const login = function (username, password, success, failure) {
    let accessToken = username + password;
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

export default {
    login,
    getStocks
};
