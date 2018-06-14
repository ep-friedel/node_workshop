export default function(list) {
  return (req, res, next) => {
    const fields = Object.keys(list);

    const data = {
      ...req.body,
      ...req.query,
      ...req.params
    };

    if (fields.every(field => list[field].test(data[field]))) {
      next();
    } else {
      res.status(400).json({ success: false });
    }
  };
}
