import "../style.css"

export default function Card(props){

    const styles = {
        backgroundColor: props.clicked ? "#222222" : "#cccccc"
    }

    return(
        <div className="Card" onClick={() => props.locked ? 0 : props.flipCard(props.id)} style={styles}>
            {props.clicked && <div className="Code">{props.code}</div>}
        </div>
    )
}