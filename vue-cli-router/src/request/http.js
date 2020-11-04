import axios from 'axios'

// var root = process.env.API_ROOT

//设置baseURL
axios.defaults.baseURL = 'http://yapi.haomo-tech.com/mock/11';
// 请求超时时间
axios.defaults.timeout = 60 * 1000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截器
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    const sessionid = localStorage.getItem("sessionId");
    if (token) config.headers['token'] = token;
    if (sessionid) config.headers['sessionId'] = sessionid;
    if (config.method === 'post') {
      //序列化
      config.data = JSON.stringify(config.data);
      config.params = {};
    }
    //请求之前重新拼装url
    // config.url = root + config.url;
    return config;
  },
  error => {
    return Promise.error(error);
  });

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.data.code > 0) {
        // Message.error(response.data.message);
      }
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          break;
        case 403:
          break;
        case 404:
          break;
        case 500:
          break;
        default:
      }
      return Promise.reject(error.response);
    }
  }
);

/**
 * get方法，对应get请求
 * @author James.yang
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function getAction(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

/**
 * post方法，对应post请求
 * @author James.yang
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function postAction(url, params) {
  console.log('url=',url)
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err.data)
      })
  })
}

/**
 * put方法，对应put请求
 * @author James.yang
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function putAction(url, params) {
  console.log('url=',url)
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err.data)
      })
  })
}

/**
 * get方法，对应get请求
 * @author James.yang
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function deleteAction(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
