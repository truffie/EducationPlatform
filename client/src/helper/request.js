import axios from 'axios';

export async function request(
  path,
  method = 'get',
  data = null,
  navigate = null,
  nav = null,
  config = {
    withCredentials: true,
  }
) {
  const requestConfig = {
    url: `http://localhost:3001/${path}`,
    method: method,
    ...config,
  };

  if (data && ['post', 'put', 'patch'].includes(method.toLowerCase())) {
    requestConfig.data = data;
  }

  return axios(requestConfig)
    .then((response) => {
      if (navigate) {
        navigate(nav);
      }
      return response.data;
    })
    .catch((e) => {
      console.error(e.message);
    });
}
