import {ReactNode} from "react";

export interface Query {
    name: string,
    url: string,
    filter: string,
    search: string
}

export interface SearchContextType {
    query: Query,
    updateSearch: (search: string) => void
    updateFilter: (filter: string) => void
    updateQuery: (query: Query) => void
}

export interface SearchProviderProps {
    children: ReactNode;
}

export interface HomeProps {
    setModalSource: (_: boolean) => void,
}

export interface WallpaperInfo {
    title: string,
    id: string,
    author: string,
    permalink: string,
    preview: any
}