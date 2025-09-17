import { listProducts } from "../../../utils/db";

export async function GET() {
  const products = listProducts();
  return new Response(JSON.stringify(products));
}
