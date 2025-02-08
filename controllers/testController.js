const testController = (req, res) => {
  res.status(200).send({
    message: "Test ro",
    success: true
  });
};

export { testController };