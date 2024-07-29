import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);
    return (

    <div>
        <h1>Isso sera exibido</h1>
    {x && <p>if x for equals trus this was print</p>}
    </div>
    );
};

export default ConditionalRender