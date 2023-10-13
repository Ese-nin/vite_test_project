import {useNavigate} from "react-router-dom";
import {PATH} from "../bll/Path";
import {Wrapper} from "./common/Wrapper";

export const MainPage = () => {

    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate(PATH.posts)
    }

    return (
        <Wrapper>
            <h1>Posts</h1>
            <button onClick={onClickHandler}>Download posts</button>
        </Wrapper>
    );
};