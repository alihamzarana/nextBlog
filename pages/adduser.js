import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const AddUser = () => {
  const router = useRouter();

  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = user;
    console.log("user before create", data);
    const res = await axios.post(
      "https://blogsite-server.herokuapp.com/users",
      data
    );
    console.log("response of user register", res);
    // navigate("/login");
    router.push("/users");
  };
  return (
    <div className="create">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input
          type="text"
          name="username"
          required
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          required
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>Password:</label>
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
