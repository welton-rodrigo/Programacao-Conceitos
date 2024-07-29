import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);

    const[name] = useState("joão")

    return (

    <div>
        <h1>Isso sera exibido</h1>
    {x && <p>if x for equals trus this was print</p>}
    {!x && <p>inverter true with ! - if x for equals trus this was print</p>}

    {name === "joão" ? (
        <div>
            <p>o nome é joão</p>
        </div>

    ) : (
        <div>
            <p>nome nao encontardo</p>
        </div>

    )}
    </div>
    );
};

export default ConditionalRender