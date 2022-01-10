import { GetServerSideProps } from "next";

const Empty = () => <div />;
export default Empty;

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    permanent: false,
    destination: "/dashboard",
  },
});
