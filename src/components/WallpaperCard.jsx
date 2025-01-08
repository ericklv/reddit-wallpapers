import PropTypes from "prop-types";
import { Fragment } from "react";

const fixUrl = url => url? url.replaceAll('&amp;','&'): '';
const getMinResol = ({resolutions}) => resolutions.length > 1? resolutions[1]: resolutions[0]
const previewUrl = imgUrl => imgUrl? getMinResol(imgUrl).url : '';
const sourceUrl = imgUrl => imgUrl? imgUrl.source.url : '';
const cutTitle = title => title? (title.length>47? title.substring(0,50) + "...": title): "No title";

const WallpaperCard = ({info, source}) => {
    let imgUrl = info.preview.images[0];
    let preview = fixUrl(previewUrl(imgUrl));
    let source_ = fixUrl(sourceUrl(imgUrl));

    return <Fragment key={info.id}>
        <div key={info.id}className="wallpaper-card">
            <img src={preview} alt="GAAAA"/>
            <p>{cutTitle(info.title)}</p>
            <p>{"By "+info.author}</p>
            <div className="w-urls">
            <a href={source+info.permalink} target="_blank">Thread</a>
            <a href={source_} download={info.id}>Download</a>
            </div>
        </div>
    </Fragment>
}

WallpaperInfo.propTypes = {
    info: PropTypes.any
}

export {WallpaperInfo}
