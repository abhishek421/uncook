class MhScroll extends React.Component{
    render(){
        return(
            <div className="mhScroll">
                <style jsx>{`
                    .mhscroll {
                        overflow-x: auto;
                        overflow-y: hidden;
                        display:flex;
                        flex-flow:row;
                    }
                `}</style>
            </div>
        )
    }
}

export default MhScroll