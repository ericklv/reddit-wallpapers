import {Wallpapers} from "../components";
import {useEffect, useState} from "react";
import {useQueryContext} from "../context/QueryContext.tsx";
import axios from "axios";

interface Props{
    setModalSource: (_ : boolean) => void,
}

const filterWallpapers = (r:any) => {
    return  (r.data.data.children).filter(w => w.data && w.data.preview)
}

const Search = ({ setModalSource}: Props) => {
    const {query, updateSearch} = useQueryContext();
    const [loaded, setLoaded] = useState(null);
    const [wallpapers, setWallpapers]= useState([]);

    useEffect(()=>{
        axios.get(query.url+query.filter)
            .then(r => {
                r.data.data && setWallpapers(filterWallpapers(r));
                setLoaded(true)
            })
            .catch( ()=> {
                setWallpapers([])
                setLoaded(false)
            })
    },[])

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            updateSearch(e.target.value)
        }
    }

    return <>
        <div className='search-layout'>
            <div className='search-header'>
                <button onClick={() => setModalSource(true)}>{query.name}</button>
                <input className='search-input' type='text'
                       placeholder={(query && query.search &&query.search != ' ' ) ? query.search : 'Search or press enter...'}
                       onKeyDown={(e) => handleSearch(e)}/>
                <button onClick={() => setModalSource(true)}>{query.filter}</button>
            </div>
            <Wallpapers wallpapers={wallpapers} loaded={loaded}/>
        </div>
    </>
}

export default Search