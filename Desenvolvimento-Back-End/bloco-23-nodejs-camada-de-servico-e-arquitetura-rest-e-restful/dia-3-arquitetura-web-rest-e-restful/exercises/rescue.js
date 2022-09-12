const rescue = (action) => async (req, res) => {
  try {
    await action(req, res, next);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  rescue,
};
