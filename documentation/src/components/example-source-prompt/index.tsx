import React from "react";
import { CommonShowSourcePrompt } from "../../prepverse-theme/common-show-source-prompt";

type Props = {
    path: string;
};

const ExampleSourcePrompt: React.FC<Props> = ({ path }) => {
    const REPO_TREE_URL = "https://github.com/PrepVerse/PrepVerse/tree";

    const SOURCE_URL = `${REPO_TREE_URL}/master/examples/${path}`;

    return <CommonShowSourcePrompt path={SOURCE_URL} />;
};

export default ExampleSourcePrompt;
