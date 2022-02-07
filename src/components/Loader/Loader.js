import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
import Signature from "../signature";

const Loader = () => {
    return (
        <LoaderContainer>
            <Signature width={500} />
        </LoaderContainer>
    );
};

export default Loader;
