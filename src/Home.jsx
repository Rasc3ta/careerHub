import PropTypes from 'prop-types';
import Banner from './Banner';
import CategoryList from './CategoryList';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    return (
        <div>
            <h2 className="text-3xl text-red-400 font-bold">Home</h2>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;