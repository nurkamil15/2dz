
export function About({object}){
    return(
        <>
            <h2>{object.title}</h2>
            <p>{object.body}</p>
            <span>{object.link}</span>
        </>
    )

}