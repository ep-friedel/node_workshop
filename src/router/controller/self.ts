let self;

export const createSelf = (req, res) => {
  console.log(req.body);

  self = req.body.name;

  res.status(200).json({ success: true });
};

export const getSelf = (req, res) => {
  res.status(200).json({ success: true, data: { name: self } });
};
