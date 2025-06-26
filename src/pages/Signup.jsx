import { use, useState } from "react";
import axios from "../api/axiosInstance.js";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    setSuccess("");
    setLoad(true);
    if (!name.trim() || !email.trim() || !password.trim()) {
      setSuccess("All fields are required");
      setLoad(false);
      return;
    }
    try {
      const res = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });
      if (!res.success) {
        setSuccess(res.data.message);
      } else {
        setSuccess(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log("An error occured! ", error.message);
    }
    setLoad(false);
  };
  return (
    <div className="rounded-lg max-w-[400px] w-full bg-black">
      <h2 className="text-3xl text-center font-semibold text-white mt-10 mb-8">
        Signup
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 w-full px-6"
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded-lg bg-gradient-to-b from-slate-700 to-slate-950 text-white border-b border-green-800"
        />
        {/* {nameErr && <p className="text-red-500 text-sm">{nameErr}</p>} */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-lg bg-gradient-to-b from-slate-700 to-slate-950 text-white border-b border-green-800"
        />
        {/* {emailErr && <p className="text-red-500 text-sm">{emailErr}</p>} */}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded-lg bg-gradient-to-b from-slate-700 to-slate-950 text-white border-b border-green-800"
        />
        {/* {passErr && <p className="text-red-500 text-sm">{passErr}</p>} */}

        <div className="w-full">
          <button
            type="submit"
            disabled={load}
            className="bg-slate-800 py-3 w-full rounded-full text-white uppercase
                    font-semibold border-b border-green-900 hover:opacity-95"
          >
            {load ? "Signing Up..." : "signup"}
          </button>
        </div>
        <p className={`mb-8 text-green-500 text-sm ${success.includes("Account") ? 'text-green-500': "text-red-500"}`}>{success}</p>
      </form>
    </div>
  );
};
export default Form;
