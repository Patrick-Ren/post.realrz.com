import Axios from "axios";

const ErrorHappened = "ERROR HAPPENED";

Axios.defaults.baseURL = "http://api.realrz.com";

// 对 Axios 进行封装，添加异常处理逻辑, 并在请求失败时向用户提示
// 返回一个一定会 resolve 的 promise
// 请求成功时，resolve 为数据
// 请求失败时，resolve 为常量 ErrorHappened
async function CallApi(
  endpoint,
  method = "get",
  resourceName = "",
  params = {}
) {
  function notifyError() {
    // notification.error({
    //   message: "网络错误",
    //   description: resourceName
    //     ? `无法${method === "get" ? "获取" : "设置"}${resourceName}`
    //     : null,
    // });
    alert(
      resourceName
        ? `无法${method === "get" ? "获取" : "设置"}${resourceName}`
        : "网络错误"
    );
  }
  // await 后面的 promise 被 reject 的话会向外抛异常
  // 如果不用 try catch 处理会造成程序崩溃
  try {
    // 1. make request
    let res = null;
    if (method === "get") {
      res = await Axios.get(endpoint);
    } else if (method === "post") {
      res = await Axios.post(endpoint, params);
    } else {
      alert("callApi currently only support get and post");
    }
    // 2. process response
    if (res.status === 200) {
      return res.data;
    } else {
      notifyError();
      return ErrorHappened;
    }
  } catch (err) {
    console.error(err);
    notifyError();
    return ErrorHappened;
  }
}

export { ErrorHappened };
export default CallApi;
