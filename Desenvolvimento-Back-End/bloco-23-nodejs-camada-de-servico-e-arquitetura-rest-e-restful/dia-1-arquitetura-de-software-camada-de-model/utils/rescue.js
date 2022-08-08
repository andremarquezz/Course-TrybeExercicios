const rescue = async (action) => {
  try {
    await action(req, res, next);
  } catch (err) {
    next(err);
  }
};
