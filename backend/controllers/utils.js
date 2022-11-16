const setResponse = (obj, response) => {
  response.status(200);
  response.json(obj);
};

const setServerError = (error, response) => {
  response.status(500);
  response.json(error);
};

const setRequestError = (error, response) => {
  response.status(400);
  response.json(error);
};

export default { setResponse, setRequestError, setServerError };
