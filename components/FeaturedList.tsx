import Image from 'next/image';

interface FeaturedData {
  page: number;
  results: [];
}

type FeaturedListProps = {
  title: string;
  data: FeaturedData;
};

const FeaturedList = ({ title, data }: FeaturedListProps) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 30,
          justifyContent: 'center',
        }}
      >
        {data.results.slice(0, 5).map((movie: any) => (
          <div key={movie.id} style={{ textAlign: 'center', width: 200 }}>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={300}
              unoptimized
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedList;
