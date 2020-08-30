import ResCard from './rescard'

function Restros(props){
    const list = props.rests.map((rest) =>
    <ResCard restro={rest}/>
    );
    return(
        <div>
            {list}
        </div>
    )
}

export default Restros