import { json, Link } from "react-router-dom"

const DataArticle = ({article}) => {
    const {id, title, filePath, description} = article

    return (
        <a href={filePath}>
            <article className=" p-5 border-solid border border-slate-300 rounded hover:brightness-75">
                <div><h3>{title}</h3></div>
                <div><h5>{description}</h5></div>
            </article>
        </a>
    )
}
export default DataArticle