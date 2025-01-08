import {useState} from 'react'
import {SourceModal} from './components/'
import {Home, Search} from './pages'
import './App.css'
import {useQueryContext} from "./context/QueryContext.tsx";

function App() {
    const {query} = useQueryContext();
    const [modalSource, setModalSource] = useState(false)

    console.log(query)

    return (
        <>
            {(query && query.search && query.search.length > 0) ?
                <Search setModalSource={setModalSource}/> :
                <Home setModalSource={setModalSource}/>}
            {modalSource &&
                <SourceModal setModalSource={setModalSource}/>}
        </>
    )
}

export default App
