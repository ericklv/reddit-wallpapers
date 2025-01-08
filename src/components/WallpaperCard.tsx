import {WallpaperInfo} from "./common/interfaces.tsx";
import {Fragment} from "react";

const fixUrl = url => url ? url.replaceAll('&amp;', '&') : '';
const getMinResol = ({resolutions}) => resolutions.length > 1 ? resolutions[1] : resolutions[0]
const previewUrl = imgUrl => imgUrl ? getMinResol(imgUrl).url : '';
const sourceUrl = imgUrl => imgUrl ? imgUrl.source.url : '';
const cutTitle = title => title ? (title.length > 47 ? title.substring(0, 50) + "..." : title) : "No title";

interface Props {
    w: WallpaperInfo
}

const WallpaperCard: React.FC<Props> = ({w}:Props): JSX.Element => {
    const imgUrl = w.preview.images[0];
    const preview = fixUrl(previewUrl(imgUrl));
    const source_ = fixUrl(sourceUrl(imgUrl));

    return <Fragment key={w.id} >
        <div className="wallpaper-card">
            <img src={preview} alt={w.title}/>
            <div className='wallpaper-card-info'>
                <p>{cutTitle(w.title)}</p>
                <p>{"By " + w.author}</p>
            </div>
            <div className="w-urls">
                <a href={'https://reddit.com' + w.permalink} target="_blank">Thread</a>
                <a href={source_} download={w.id}>Download</a>
            </div>
        </div>
    </Fragment>
}

export {WallpaperCard}