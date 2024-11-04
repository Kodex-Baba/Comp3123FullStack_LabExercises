function SayHello(props) { // {fname, lname}
    // const name = "Akorede"
    const myStyle = {
        color: '#BFA181',
        backgroundColor: '#0A1828'
    }
    return (
        <h1 style={myStyle}>Hello {props.fname} {props.lname}</h1>
        // <h1>Hello {fname} {lname}</h1>
    )
}

export default SayHello;