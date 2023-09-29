import getAllCategories from '@/utils/getAllCategories';
import Category from './Category';

const Categories = async () => {
    const data = await getAllCategories();
    console.log(data.length);
    return (
        <div className='grid grid-cols-5 gap-5'>
            {
                data.map((category) => <Category key={category.id} category={category} />)

            }
        </div>
    );
};

export default Categories;