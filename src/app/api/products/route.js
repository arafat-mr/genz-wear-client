import addProductSafe from "@/Library/addProductSafe";

export async function POST(req) {
  try {
    const productData = await req.json(); // parse POST body
    const result = await addProductSafe(productData); // insert safely

    return new Response(
      JSON.stringify(result),
      {
        status: result.success ? 200 : 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
