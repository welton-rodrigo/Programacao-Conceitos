const Events = () => {

const handleMyEvent = (e) => {
    console.log(e);
};

const renderSomething = (x) => {
    if(x){
        return <h1>Render this</h1>
    }else{
        return <h1>also render this</h1>
    }
}

    return(
        <div>

            <div>
                <button onClick={handleMyEvent}> Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}></button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>

    )

};

export default Events;