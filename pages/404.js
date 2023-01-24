
function Error_404()
{
    const styles = {
        body_page:{
            height: "calc(100vh - 70px)",
            with:"100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    }


    const component = 
    <div style={styles.body_page}>
        404 | Page not found
    </div>

    return component
}


export default Error_404