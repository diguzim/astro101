import { purchaseProduct } from "../../../utils/db";

export async function GET({ params }: { params: { id: string } }) {
  console.log("params:", params);
  const { id: idAsString } = params;
  const id = parseInt(idAsString, 10);
  const randomQuantity = Math.floor(Math.random() * 3) + 1;
  const updatedProductList = await purchaseProduct(id, randomQuantity);

  return new Response(JSON.stringify(updatedProductList));
}
