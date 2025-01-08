import {WallpaperCard} from "./WallpaperCard.tsx";
import {WallpaperInfo} from "./common/interfaces.tsx";

interface Props {
    wallpapers: WallpaperInfo[] | []
    loaded: boolean | null
}

const Wallpapers: React.FC<Props> = ({wallpapers, loaded}: Props): JSX.Element => {

    return <div className='wallpaper-list'>
        {loaded == null ? <p>Loading data ...</p> :
            !loaded ? <p>Failed loading. :S</p> :
                wallpapers?.map(w => <WallpaperCard w={w.data}/>)
        }
    </div>
}

export {Wallpapers}