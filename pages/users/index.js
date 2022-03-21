import styles from "../../styles/Jobs.module.css";
import Link from "next/link";
// export const getStaticProps = async () => {
//   const res = await fetch("https://ecommerceburraq.herokuapp.com/user");
//   const data = await res.json();

//   return {
//     props: { users: data },
//   };
// };

const Users = ({ users }) => {
  console.log(users);

  return (
    <div>
      <h1>All Users</h1>
      {users?.data?.map((user) => (
        <Link href={`/users/${user._id}`} key={user._id}>
          <a className={styles.single}>
            <h3>{user.username}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};
export async function getServerSideProps() {
  // console.log("context", context);
  // const userId = await context.params.id;
  // console.log("userID", userId);
  // Fetch data from external API
  const res = await fetch(`https://blogsite-server.herokuapp.com/users`);
  const data = await res.json();
  console.log("data", data);
  // Pass data to the page via props
  return { props: { users: data } };
}

export default Users;
