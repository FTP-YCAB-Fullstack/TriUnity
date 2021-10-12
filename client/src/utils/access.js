const axios = require('axios  ')

let access = {
    async isLogin() {
      let user = JSON.parse(localStorage.getItem("access"));
  
      if (user === null) {
        return false;
      }
  
      const { data } = await axios.get(
        "https://613617b98700c50017ef53d2.mockapi.io/hightrivia/api/users"
      );
  
      const validation = data.filter(item => {
        if (item.username === user.username && item.password === user.password) {
          return true;
        }
        return false;
      });
  
      if (validation[0] !== undefined) {
        return true;
      }
  
      return false;
    }
}

export default access