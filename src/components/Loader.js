import { Spinner } from "react-bootstrap";

function Loader(props) {
    if (props.loading){
        return (<Spinner animation={"border"} />)
    }

    return (<div></div>)
}

export default Loader;