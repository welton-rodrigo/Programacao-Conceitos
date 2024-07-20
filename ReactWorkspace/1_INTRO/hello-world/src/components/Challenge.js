const Challenge = () => {

var x = 3;
var y = 6;
const somaValores = () =>{
    
    console.log(y+x);
}

return(
    <div>
        <div>
            <button onClick={somaValores}>
                <p>Clique para somar</p>
            </button>
        </div>

    </div>
)

};

export default Challenge;