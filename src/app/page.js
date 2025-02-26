import { fetchAllProducts } from "@/actions";
import { auth } from "@/auth";
import ProductCard from "@/components/ui/product-card";
import { redirect } from "next/navigation";

export default async function Home() {
  const getSession = await auth();
  const getAllProducts = await fetchAllProducts();

  if (!getSession?.user) return redirect("/unauth-page");


  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <div className="mt-10 grid grid-cols-4 gap-5">
        {getAllProducts && getAllProducts.data && getAllProducts.data.length > 0
          ? getAllProducts?.data?.map((productItem) => (
              <ProductCard key={productItem.id} productItem={productItem} />
            ))
          : null}
      </div>
    </div>
  );
}
