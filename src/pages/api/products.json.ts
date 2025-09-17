import { listProducts } from "../../utils/db";

export async function GET() {
  const products = listProducts();
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
