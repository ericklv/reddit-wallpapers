import {useQueryContext} from "../context/QueryContext.tsx";
import {HomeProps} from "../components/common/interfaces.tsx";

const Home = ({setModalSource}: HomeProps) => {
    const {query, updateSearch} = useQueryContext();

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            const x= e.target.value
            updateSearch(x? x: ' ')
        }
    }

    return <>
        <div className='home-layout'>
            <h1>Oled Wallpapers</h1>
            <div className='card'>
                <input className='search-input' type='text' placeholder='Search or press enter...'
                       onKeyDown={(e) => handleSearch(e)}/>
            </div>
            <div className='card'>
                <button onClick={() => setModalSource(true)}>{query.name}</button>
            </div>
            <p className='footer-message'>
                Made with love in Perukistan
            </p>
        </div>
    </>
}

export default Home