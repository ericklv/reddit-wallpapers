import {SearchContextType, SearchProviderProps, Query} from "../components/common/interfaces.tsx";
import React, {useContext, useEffect, useState} from 'react';
import repo from './../data/reddit.json';

export const defaultQuery = {
    name: repo.sources[0].name,
    url: repo.sources[0].url,
    filter: repo.filters[0].query,
    search: ''
} as Query

const QueryContext = React.createContext<SearchContextType | undefined>(undefined);

export const QueryContextProvider = ({children}: SearchProviderProps) => {
    const [query, setQuery] = useState<Query>(defaultQuery)
    const updateSearch = (search: string) => setQuery({...query, search})
    const updateFilter = (filter: string) => setQuery({...query, filter})
    const updateQuery = (source: Query) => setQuery(source)

    useEffect(() => {
        const q = localStorage.getItem('query')

        if (q != 'undefined') {
            console.log('csm >:c', query)
            setQuery(JSON.parse(q))
        } else {
            setQuery(defaultQuery)
            console.log('csm', query)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('query', JSON.stringify(query))
    }, [query])

    const contextValue: SearchContextType = {
        query,
        updateSearch,
        updateQuery,
        updateFilter
    }

    return (
        <QueryContext.Provider value={contextValue}>
            {children}
        </QueryContext.Provider>
    );
}

export const useQueryContext = () => {
    const queryContext = useContext(QueryContext);
    if (!queryContext) {
        throw new Error('was pe hand, u need use QueryContextProvider')
    }

    return queryContext
}