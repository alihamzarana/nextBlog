// export const getStaticPaths = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

import axios from "axios";
import { useRouter } from "next/router";

//   // map data to an array of path objects with params (id)
//   const paths = data.map((user) => {
//     return {
//       params: { id: user.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
//   const data = await res.json();

//   return {
//     props: { user: data },
//   };
// };

const Details = ({ data }) => {
  console.log("single userdata ::", data);
  const router = useRouter();
  const handleDelete = async () => {
    // const userId = context.params.id;
    const userId = router.query.id;
    console.log("userID", userId);

    const res = await axios.delete(
      `https://blogsite-server.herokuapp.com/users/${userId}`
    );
    console.log("delete response", res);
    router.push("/users");
  };
  return (
    <div className="create">
      <h1>{data.data.username}</h1>
      <p>{data.data.email}</p>
      <button onClick={handleDelete}>Delete</button>
      {/* <button onClick={handleUpdate}>Update</button> */}
    </div>
  );
};
export async function getServerSideProps(context) {
  // console.log("context", context);
  const userId = context.params.id;
  console.log("userID", userId);
  // Fetch data from external API
  const res = await fetch(
    `https://blogsite-server.herokuapp.com/users/${userId}`
  );
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Details;
