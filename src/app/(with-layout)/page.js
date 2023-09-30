import Categories from "@/components/Homepage/Categories";
export const revalidate = 5;
const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Categories />
    </div>
  )
}

export default HomePage;
