// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Restaurants from "../../../data";

export default function restroHandler({ query: { id } }, res) {
  const filtered = Restaurants.filter((p) => p.id === id);
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Restaurant with id: ${id} not found.` });
  }
}
