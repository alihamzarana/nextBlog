import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   return {
//     props: { users: data },
//   };
// };

const About = (props) => {
  {
    console.log(" res data", props.data);
  }
  // const [data, setData] = useState([]);
  // const dataFetch = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const resData = await res.json();
  //   setData(resData);
  // };
  // useEffect(() => {
  //   dataFetch();
  // }, []);

  return (
    <div>
      <>
        <h1>About Component</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
      </>
    </div>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default About;

// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const resData = await res.json();
//   return {
//     props: { users: resData },
//   };
// };
