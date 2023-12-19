import AppBar from "../../components/appbar/appbar"


interface proptype{
    title?: string
}

const UserSection = ({title = "유저 관리"}:proptype) => {
    return(
        <div>
            <AppBar text={title}/>
        </div>
    )
}

export default UserSection