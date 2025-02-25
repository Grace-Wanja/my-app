export default function ChapterCard(props) {


    let ourStyles = {
        color: "#287a79",
        backgroundColor: "##287a79",
        border: "5px dashed black",
        padding: "10px",
        margin: "50px",
        borderRadius: "10px"
    }

    return (
        <div style={ourStyles}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>{props.content}</p>
        </div>
    );
}