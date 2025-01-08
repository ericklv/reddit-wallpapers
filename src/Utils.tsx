import repo from './data/reddit.json';
import axios from "axios";

export const getSource = (name: string) => {
    return repo.sources.find(i => i.name == name)
}

export const getFilter = (name: string) => {
    return repo.filters.find(i => i.name == name)
}

export const callToReddit = (url: string, then_: () => void, catch_: () => void) => {
    axios.get(url)
        .then(r => then_(r))
        .catch(() => catch_())
}

export const searchInput = (search: string) => search.replace(/ +(?= )/g, '');
