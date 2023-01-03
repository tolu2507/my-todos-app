export const RESPONSE401 = (res, error) => {
    return res.status(401).json({msg:error})
}

export const RESPONSE201 = (res, data) => {
  return res.status(201).json(data);
};

export const RESPONSE200 = (res) => {
  return res.status(200).json({msg: "SUCCESSFUL....."});
};