import '../Css/main.css'

/* Must start with a Caps letter */
function Background(props)
{
    return (
        <>
            <div className = "background-image" style = {{backgroundImage: `url(${props.image})`}}>

            </div>
            
        </>
    );
}

Background.defaultProps = 
{
    image: "#ccc"
};
export default Background;