import { useRouter } from "next/router"

export default function Movies_Detail(props) {
    const router = useRouter();
    // const [title, id] = router.query.params || [];
    const [title, id] = props.params;
    return(
        <>
        {title}
        </>
    )
}

export function getServerSideProps({query:{params}}){
    return{
        props:{
            params,
        }
    }
}