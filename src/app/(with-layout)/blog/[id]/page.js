export const metadata = {
    title: 'Single Blog',
    description: 'Next Hero',
}
const SingleBlogPage = ({ params, SearchParams }) => {
    console.log(params);
    console.log(SearchParams);
    return (
        <div>
            welcome to our new article: {params.id}
        </div>
    );
};

export default SingleBlogPage;