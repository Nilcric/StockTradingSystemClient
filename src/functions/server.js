import axios from 'axios';

const accountServer = 'http://47.97.74.128:8080/';
const stockServer = 'http://q.xiexun.tech:8877/';

const log = function (...text) {
    // eslint-disable-next-line
    console.log('[Server]', ...text)
}

const login = function (username, password, success, failure) {
    axios.post(accountServer + 'security/login', {
        id: username,
        password: password,
    }).then(response => {
        if (response.data.error_code === 0) {
            success(response.data);
        }
        else {
            failure(response.data);
        }
    })
}

const getStock = function (data, success, failure) {
    axios.post(stockServer + 'stockinfo', {
        auth: localStorage['accessToken'],
        stockid: data.id
    }).then(response => {
        if (response.data.successful) {
            // success(response.data.data);
        }
        else {
            // failure(response.data.data);
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
            // success(response.data.data);
        }
        else {
            // failure(response.data.data);
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

const getMyStocks = function (data, success, failure) {
    axios.post(accountServer + 'security/securities_list', {
        auth: localStorage['accessToken'],
        id: localStorage['username']
    }).then(response => {
        if (response.data.error_code == 0) {
            success(response.data.results);
        }
        else {
            failure(response.data.error_code);
        }
    })
}

const getMyFinances = function (data, success, failure) {
    axios.post(accountServer + 'security/finance_accounts_list', {
        auth: localStorage['accessToken'],
        id: localStorage['username']
    }).then(response => {
        if (response.data.error_code == 0) {
            success(response.data.results);
        }
        else {
            failure(response.data.error_code);
        }
    })
}

const getMyInfo = function (data, success, failure) {
    axios.post(accountServer + 'security/query_id', {
        id: localStorage['username']
    }).then(response => {
        if (response.data.error_code == 0) {
            success(response.data);
        }
        else {
            failure(response.data.error_code);
        }
    })
}

const loginFinance = function (data, success, failure) {
    axios.post(accountServer + 'finance/login', {
        id: data.id,
        password: data.password
    }).then(response => {
        if (response.data.error_code == 0) {
            success(response.data);
        }
        else {
            failure(response.data.error_code);
        }
    })
}

const getFinance = function (data, success, failure) {
    axios.post(accountServer + 'finance/query_id', {
        id: data.id,
    }).then(response => {
        if (response.data.error_code == 0) {
            success(response.data);
        }
        else {
            failure(response.data.error_code);
        }
    })
}

const setFinancePassword = function (data, success, failure) {
    axios.post(accountServer + 'finance/set_password', {
        id: data.id,
        new_password: data.passwd
    }).then(response => {
        if (response.data.error_code == 0) {
            success(response.data);
        }
        else {
            failure(response.data.error_code);
        }
    })
}

const setFinanceTransactionPassword = function (data, success, failure) {
    axios.post(accountServer + 'finance/set_transaction_password', {
        id: data.id,
        transaction_password: data.passwd0,
        new_transaction_password: data.passwd,
    }).then(response => {
        if (response.data.error_code == 0) {
            success(response.data);
        }
        else {
            failure(response.data.error_code);
        }
    })
}

export default {
    login,
    getStock,
    getStocks,
    getCommand,
    getCommands,
    sendCommand,
    revokeCommand,
    getMyStocks,
    getMyInfo,
    getMyFinances,
    loginFinance,
    getFinance,
    setFinancePassword,
    setFinanceTransactionPassword
};
