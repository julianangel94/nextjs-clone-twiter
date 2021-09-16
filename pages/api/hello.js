// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//creacion de end point que devuelve un objeto
export default (req, res) => {
  res.status(200).json({ name: "John Doe" });
};
