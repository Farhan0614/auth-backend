export const signup = (req, res, next) => {
  res.status(200).json({ status: "success", message: "Register hit" });
};

export const login = (req, res, next) => {
  res.status(200).json({ status: "success", message: "Login hit" });
};

export const profile = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "this is user data",
  });
};

export const update = (req, res, next) => {
  res.status(200).json({ status: "success", message: "Update hit" });
};
