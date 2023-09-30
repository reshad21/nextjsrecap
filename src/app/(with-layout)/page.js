import Categories from "@/components/Homepage/Categories";
import Popularproducts from "@/components/Homepage/Popularproducts";
import { Suspense } from "react";
export const revalidate = 5;
const HomePage = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Categories />
      <Suspense fallback={<h1 className='text-center font-semibold text-2xl'>Loading...</h1>}>
        <Popularproducts />
      </Suspense>
    </div>
  )
}

export default HomePage;
