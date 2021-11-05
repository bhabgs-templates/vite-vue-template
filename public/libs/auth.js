// 身份认证
const auth = () => {
  const a = vitevuu.checkUser.check();
  a.then((res) => {
    if (res.type === "failure") {
      window.location.href = "/login/";
    }
  });
};

const authUser = (token) => {};

const findUser = (name, number) => {
  if (!users) return alert("用户服务连接失败");
  let flag = false;
  for (let i of users) {
    if (i.name === name && i.number === number) {
      flag = true;
    }
  }
  return flag;
};

const store = {
  getToken() {
    return window.sessionStorage.getItem("token");
  },
  setToken(token) {
    window.sessionStorage.setItem("token", token);
  },
};
