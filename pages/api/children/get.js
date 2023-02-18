import query from "../../lib/db";

export default async function handler(req, res) {

  const children = await query({
    query: "SELECT * FROM CHILDREN;",
    values: []
  });

  return res.status(200).json(children);

}