import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.chucknorris.io/jokes'
  // headers: {
  //   Authorization:
  //     'Client-ID rQqS6Mxh-OkgffczLJQPIDMBfMpChnZfEKYdWRvmeas',
  // },
});
