import AppBar from "../../components/appbar/appbar"

interface proptype{
    title?: string
}

const BrandSection = ({title = "기업 관리"}:proptype) => {
    return(
        <div>
            <AppBar text={title}/>
        </div>
    )
}

export default BrandSection