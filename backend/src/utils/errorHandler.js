export const handleApiError = (error, res) => {
  // check if we received a response from the api
  if (error.response) {
    res
      .status(error.response.status)
      .json({ error: error.response.statusText });
  } else {
    // no response - 500 fallback error code
    res.status(500).json({ error: error.message });
  }
};
