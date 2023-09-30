import getAllCategories from '@/utils/getAllCategories';
import Category from './Category';

const Categories = async () => {
    const data = await getAllCategories();
    console.log(data.length);
    return (
        <div className="">
            <h1 className='text-xl font-bold'>Categories</h1>
            <div className='grid grid-cols-5 gap-5 my-3'>
                {
                    data.map((category) => <Category key={category.id} category={category} />)

                }
            </div>
        </div>
    );
};

export default Categories;