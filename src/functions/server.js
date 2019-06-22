import axios from 'axios';

const accountServer = '/';
const stockServer = '/';

const log = function (...text) {
    // eslint-disable-next-line
    console.log('[Server]', ...text)
}

const login = function (username, password, success, failure) {
    let accessToken = username + password;

    localStorage['username'] = username;
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

const getStock = function (data, success, failure) {
    axios.post(stockServer + 'stockinfo', {
        auth: localStorage['accessToken'],
        stockid: data.id
    }).then(response => {
        if (response.data.successful) {
            success(response.data.data);
        }
        else {
            failure(response.data.data);
        }
    })
    success(require('./getStock.json'));
}

const getStocks = function (data, success, failure) {
    axios.post(stockServer + 'stocklist', {
        auth: localStorage['accessToken'],
        name: data.name,
        from: data.from,
        to: data.to
    }).then(response => {
        if (response.data.successful) {
            success(response.data.data);
        }
        else {
            failure(response.data.data);
        }
    })
    if (Math.random() > 0.1) {
        success(require('./getStocks.json'));
    }
    else {
        failure("为什么会失败呢，因为只是测试而已。");
    }
}


const getCommand = function (data, success, failure) {
    axios.post(stockServer + 'instinfo', {
        auth: localStorage['accessToken'],
        instid: data['commandID'],
        userid: localStorage['username']
    }).then(response => {
        if (response.data.successful) {
            success(response.data.data);
        }
        else {
            failure(response.data.data);
        }
    })
    success(require('./getCommand.json'));
}

const getCommands = function (data, success, failure) {
    axios.post(stockServer + 'userinst', {
        auth: localStorage['accessToken'],
        userid: localStorage['username']
    }).then(response => {
        if (response.data.successful) {
            success(response.data.data);
        }
        else {
            failure(response.data.data);
        }
    })
    success(require('./getCommands.json'));
}

const sendCommand = function (data, success, failure) {
    axios.post(stockServer + 'instrequest', {
        auth: localStorage['accessToken'],
        userid: localStorage['username'],
        type: data.type,
        stockid: data.id,
        amount: data.amount,
        price: data.price
    }).then(response => {
        if (response.data.successful) {
            success(response.data.data);
        }
        else {
            failure(response.data.data);
        }
    })
    success(require('./getCommand.json'));
}

const revokeCommand = function (data, success, failure) {
    axios.post(stockServer + 'instrequest', {
        auth: localStorage['accessToken'],
        instid: data.commandID,
        userid: localStorage['username']
    }).then(response => {
        if (response.data.successful) {
            success(response.data.data);
        }
        else {
            failure(response.data.data);
        }
    })
    success(true);
}

export default {
    getStock,
    getStocks,
    getCommand,
    getCommands,
    sendCommand,
    revokeCommand,
};
