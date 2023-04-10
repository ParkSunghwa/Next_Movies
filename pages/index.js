import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function Home () {
    const router = useRouter();
    const onClick = (id, title) => {
        router.push(`/movies/${title}/${id}`);
    }
    let [movies, setMovies] = useState();
    useEffect(() => {
        (async () => {
            const data = await (await fetch('/api/movies')).json();
            setMovies(data.results);
        })();
        // ()()는 즉시 실행 함수고로, 비동기처리 되어야 할 함수를 우선적으로 처리해준다.  
    },[])
    return(
        <div className="container">
        {!movies && <h4>loading...</h4>}
        {movies?.map((movie,i) => {
            return(
                // <Link href={`/movies/${movie.id}`} key={i}>
                <div 
                className="movie" key={i} 
                onClick={()=>{onClick(movie.id, movie.original_title)}}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <h4>{movie.original_title}</h4>
                </div>
                // </Link>
            )
        })}
        <style jsx>{`
            .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
            }
            .movie {
                cursor:pointer;
            }
            .movie img {
                max-width: 100%;
                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            .movie:hover img {
                transform: scale(1.05) translateY(-10px);
            }
            .movie h4 {
                font-size: 18px;
                text-align: center;
            }
        `}</style>
        </div>
    )
}

// export async function getServerSideProps() {

//     const {results} = await (await fetch('http://localhost:3000/api/movies')).json();

//     return{
//         props:{
//             results,
//         }
//     }
// }