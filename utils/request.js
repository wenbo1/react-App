import md5 from "react-native-md5";
import queryString from 'qs';
import { apihost, apiSignKey } from './config';

/**
 * 生成签名随机数
 * @param {Number} len 长度
 */
function genSignNonce(len = 16) {
    //用于生成ukey字符串数组
    let keyChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //默认值
    // if (len === undefined) {
    //     len = 16
    // }

    //生成16位随机字符串
    let nonce = '';
    for (var i = 0; i < len; i += 1) {
        nonce += keyChars[Math.floor(Math.random() * 62)]
    }
    return nonce;
}

/**
 * 获取数据的签名
 * @param {Array} data 待签名数据
 * @returns {String}
 */
function getDataSign(data) {
    //检查是否是对象类型
    if (!(typeof data === 'object')) {
        return '';
    }
    //字典序排列数组之后，以&符号拼接非空数据，并补上api_key
    var keys = Object.keys(data).sort();
    var strArr = [];
    for (var index in keys) {
        var key = keys[index];

        //键忽略（sign）
        if (key === 'sign') {
            continue;
        }

        //值处理
        var value = data[key];
        value = (value === undefined || value === null) ? '' : value;

        //此处需要强类型等于，因为(0 == '')，但0是需要参与签名的
        if (value !== '') {
            strArr.push(key + '=' + value);
        }
    }

    //补充签名key、md5加密
    strArr.push('key=' + apiSignKey);
    return md5.hex_md5(strArr.join('&'));
}

function convertUrl(url, params) {
    //补充签名随机数、数据签名
    let nonce = genSignNonce();
    let sign = getDataSign(Object.assign({}, params, {nonce: nonce}));
    let commonParams = {nonce: nonce, sign, sign};
    return apihost + url + "?" + queryString.stringify(Object.assign({}, params, commonParams));
}

export const get = (url, params) => {
    return new Promise((resolve, reject) => {
        fetch(convertUrl(url, params))
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                reject(error);
            });
    })
}
