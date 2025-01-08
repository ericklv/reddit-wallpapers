import repos from './../assets/data/reddit.json'
import {getSource} from "../Utils.tsx";
import {useQueryContext} from "../context/QueryContext.tsx";

interface Props {
    setModalSource: (name: boolean) => void
}

const SourceModal: React.FC<Props> = ({ setModalSource}: Props): JSX.Element => {
    const {query, updateQuery} = useQueryContext();

    const handleSelect = (name: string) => {
        setModalSource(false)
        const source = getSource(name)
        updateQuery({...query, name: name, url: source.url})
    }

    return <div className="source-modal">
        {repos.sources.map(sx => <a key={sx.name}
                                    onClick={() => handleSelect(sx.name)}>
            {sx.name}</a>)}
    </div>
}

export {SourceModal}