import React, {Component} from "react";
import HookIllustration from "./HookIllustration";
import HookDescription from "./HookDescription";

class Hook extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <HookIllustration/>
                <HookDescription/>
            </>
        );
    }
}

export default Hook;