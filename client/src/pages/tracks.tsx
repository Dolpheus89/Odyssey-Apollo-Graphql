import { Layout } from "../components";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";

const Tracks = () => {


const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

const { loading, error, data } = useQuery(TRACKS);

if (loading) {
  return (

      <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />

  );
}
  if (error) return `Error! ${error.message}`;
  return (
    <Layout grid>
  {data?.tracksForHome?.map((track) => (
    <TrackCard key={track.id} track={track} />
  ))}
</Layout>
  )
};

export default Tracks;
