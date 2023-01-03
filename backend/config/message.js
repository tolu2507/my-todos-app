export const RESPONSE401 = (res, error) => {
    return res.status(401).json({msg:error})
}

export const RESPONSE201 = (res, data) => {
  return res.status(201).json(data);
};

export const RESPONSE301 = (res) => {
  return res.status(301).json({msg: "SUCCESSFUL....."});
};