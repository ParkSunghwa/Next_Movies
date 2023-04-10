import { useRouter } from "next/router";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import Seo from "./Seo";

export default function Layout (props) {
    const router = useRouter();
    let [pathname, setPathname] = useState();
    useEffect(()=>{
        let DeleteOne = router.pathname.substring(1);
        let findAnother = DeleteOne.indexOf('/');
        let titleRaw = findAnother == -1 ? DeleteOne:DeleteOne.substring(0, findAnother);
        let title = titleRaw === "" ? 'HOME' : titleRaw.toUpperCase();
        setPathname(title);
    },[router]);
    return(
        <>
        <Seo title={pathname} />
        <Navigation />
        {props.children}
        <style jsx global>{`
            a{
                text-decoration:none;
                color:inherit;
            }
            ul, li, ol{
                list-style:none;
            }
            *{
                margin:0;
                padding:0;
            }
        `}</style>
        </>
    )
}