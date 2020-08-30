import ResCard from './rescard'

function Restros(props){
    const list = props.rests.map((rest,index) =>
    <ResCard key={`Res${index}`} restro={rest}/>
    );
    return(
        <div>
            {list}
        </div>
    )
}

export default Restros