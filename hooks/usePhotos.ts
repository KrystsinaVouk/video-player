import {useDispatch} from "react-redux";
import {useEffect} from "react";

import {NextThunkDispatch} from "../store";
import {useTypedSelector} from "./useTypedSelector";
import {fetchPhotos} from "../store/action-creators/photo";
import {useActions} from "./useActions";

const LIMIT = 10;

export const usePhotos = () => {
    const dispatch = useDispatch() as NextThunkDispatch;
    const {photos, totalCount, error, fetching, currentPage} = useTypedSelector(state => state.photo);
    const {setFetching, setCurrentPage} = useActions()

    useEffect(() => {
        const fetchPhotosData = async () => {
            await dispatch(fetchPhotos(currentPage, LIMIT));
        }
        if (fetching) {
            fetchPhotosData().then(res => {
                setCurrentPage();
            })
                .finally(() => setFetching(false))
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    const scrollHandler = (event) => {
        if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100
            && photos.length < totalCount) {
            setFetching(true);
        }
    }

    return {
        photos,
        error
    }
}
