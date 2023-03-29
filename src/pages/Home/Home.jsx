import { useEffect } from "react"
import DataArticle from "../../components/DataArticle/DataArticle"
import { useGlobalContext } from "../../context/context"
import { dataArticlesInfo } from "../../data/dataArticles"

const Home = () => {
    const {columnsNumber} = useGlobalContext()

    return (
        <>
            <header>
                <div className="flex justify-center items-center py-4 text-gray-700">
                    <h1 className="text-5xl text-center">My codes data</h1>
                </div>
            </header>
            <main style={{display: "flex", justifyContent: "center", paddingTop: "30px"}}>
                <div style={{display: "grid", gridTemplateColumns: `repeat(${columnsNumber}, 1fr)`,
                             justifyItems: "center", width: "80vw"}}>
                    {dataArticlesInfo.map((article) => {
                        return (
                            <DataArticle article={article}/>
                        )
                    })}
                </div>
            </main>
            <aside style={{position: "fixed", bottom: "0", width: "100vw", padding: "15px"}}>
                <div className="flex justify-end">
                    <h3>Coded by <a className=" text-gray-800 hover:text-blue-500" href="https://github.com/NicolasfcAraujo">NicolasfcAraujo</a></h3>
                </div>
            </aside>
        </>
    )
}
export default Home