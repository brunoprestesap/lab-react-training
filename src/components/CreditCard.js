import visa from "../assets/images/visa.png";
import master from "../assets/images/pngegg.png";

function CreditCard(props){

    const band = (props.type === "Visa") ? visa : master;

    const ultimosDigitos = props.number.split("").slice(12, 16);

    const divStyle = {
        backgroundColor: props.bgColor,
        color: props.color,
        height: "200px",
        width: "400px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        padding: "10px"
    }

    const divBand = {
        display: "flex",
        justifyContent: "flex-end"
    }

    const divNumber = {
        display: "flex",
        justifyContent: "center",
        fontSize: "35px",
        margin: "45px 10px"
    }

    const p = {
        marginRight: "30px",
    }

    return (
        <div style={divStyle}>
            <div style={divBand}>
                <img
                    src={band}
                    alt="Band"
                    width="30px"
                />
            </div>
            <div style={divNumber}>
                **********{ultimosDigitos}
            </div>
            <div>
                <span style={p}>Expires {props.expirationMonth}/{props.expirationYear}</span>
                {props.bank}
            </div>
            <div>
                {props.owner}
            </div>
        </div>
    );
}

export default CreditCard;