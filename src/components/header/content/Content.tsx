import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces/IMovie";

interface IProps extends PropsWithChildren {
    shortFilm: IMovie
}

const Content: FC<IProps> = ({shortFilm}) => {
    console.log(shortFilm)
    return (
        <div>
            
        </div>
    );
};

export default Content;