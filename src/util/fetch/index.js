
const get = async (url = '', params = {}, options = {}) => {
    let dataStr = ''; //数据拼接字符串
    Object.keys(params).forEach(key => {
        dataStr += key + '=' + params[key] + '&';
    })

    if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
    }

    const requestConfig = {
        ...options,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(url, requestConfig);
        const responseJson = await response.json();
        return responseJson
    } catch (error) {
        throw new Error(error)
    }
}

const post = async (url = '', params = {}, options = {}) => {
    const requestConfig = {
        ...options,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }
    try {
        const response = await fetch(url, requestConfig);
        const responseJson = await response.json();
        return responseJson
    } catch (error) {
        throw new Error(error)
    }
}

export default {
    get,
    post
}