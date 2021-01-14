const HOST = 'http://0.0.0.0';
const PORT = 3000;

const GET = (path) => {
  return FETCH('GET', path);
};

const POST = (path, body) => {
  return FETCH('POST', path, body && JSON.stringify(body));
};

const FETCH = async (method, path, body) => {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set('Accept', 'application/json');
  const options = {
    method,
    mode: 'cors',
    headers,
    body,
  };

  const promise = fetch(HOST + ':' + PORT + path, options);
  return promise;
};

export default { GET, POST };
