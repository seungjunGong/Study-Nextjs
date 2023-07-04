import Head from "next/head";
import axios from "axios";
import MovieList from "../components/MovieList";

export default function Home(props) {
  const { posters } = props;

  return (
    <div>
      <Head>
        <title>clone netflix</title>
        <meta name="description" content="Clone by netflix app" />
        <link rel="icon" href="/ic_netflix.png" />
      </Head>
      <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/BOqFRHCrN-k"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        autoplay
      ></iframe>
      <MovieList title="지금 뜨는 콘텐츠" posters={posters[0]} />
      <MovieList title="대한민국의 Top 10 영화" posters={posters[1]} />
      <MovieList title="다시보기 추천 콘텐츠" posters={posters[2]} />
      <MovieList title="해외 시리즈" posters={posters[3]} />
    </div>
  );
}

const boxOfficeUrl = (targetDt) => {
  return `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.BOX_OFFICE_KEY}&targetDt=${targetDt}`;
};

const posterUrl = (name) =>
  `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&title=${encodeURIComponent(
    name
  )}&ServiceKey=${process.env.POSTER_KEY}`;

const movieData = async (targetDt, repNationCd) => {
  try {
    const response = await axios.get(
      repNationCd != ""
        ? boxOfficeUrl(targetDt) + `&repNationCd=${repNationCd}`
        : boxOfficeUrl(targetDt)
    );
    const movieList = response.data.boxOfficeResult.dailyBoxOfficeList.map(
      (movie) => movie.movieNm
    );

    const promises = movieList.map(async (name) => {
      try {
        const response = await axios.get(posterUrl(name));
        const data = response.data.Data[0].Result[0];
        const posters = data.posters.split("|");
        const validPosters = posters.filter((poster) =>
          /\.(jpeg|jpg|gif|png)$/.test(poster)
        );
        if (validPosters.length > 0) {
          return validPosters[0];
        }
      } catch (error) {
        console.error(`Failed to fetch poster for movie: ${name}`, error);
      }
      return null;
    });

    const posters = await Promise.all(promises);

    return posters.filter((poster) => poster !== null);
  } catch (error) {
    console.error("영화 데이터를 불러오는 동안 오류가 발생했습니다.", error);
    return [];
  }
};

export async function getStaticProps() {
  const posters1_1 = await movieData("20230703", "");
  const posters1_2 = await movieData("20230303", "");
  const posters1 = [...posters1_1, ...posters1_2];

  const posters2_1 = await movieData("20230703", "K");
  const posters2_2 = await movieData("20230603", "K");
  const posters2 = [...posters2_1, ...posters2_2];

  const posters3_1 = await movieData("20191204", "");
  const posters3_2 = await movieData("20171204", "");
  const posters3_3 = await movieData("20121204", "");
  const posters3 = [...posters3_1, ...posters3_2, ...posters3_3];

  const posters4 = await movieData("20230303", "F");

  const posters = [posters1, posters2, posters3, posters4];

  return {
    props: {
      posters: posters,
    },
  };
}
