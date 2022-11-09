function BoxColor({r, g, b}){
    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        height: '100px',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        width: "500px",
        border: "2px solid black"
    }

    return(
        <div style={divStyle}>
            {divStyle.backgroundColor}
        </div>
    );
}

export default BoxColor;