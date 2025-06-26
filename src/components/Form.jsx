import { use, useState } from "react";

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passErr, setPassError] = useState('');
    const [load, setLoad] = useState(false);
    const [success, setSuccess] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailErr('');
        setPassError('');
        setSuccess('');
        if(!email.trim()){
            setEmailErr("A valid email is required!");
        }
        if(!password.trim()){
            setPassError("Password field is empty!");
        } if(password.length < 6){
            setPassError("Password should not be less than six digits!")
        }
        

    }
  return (
    <div className="rounded-lg max-w-[400px] w-full bg-black">
        <h2 className="text-3xl text-center font-semibold text-white mt-10 mb-8">Signup</h2>
        <form onSubmit={handleSubmit}
            className="flex flex-col items-center gap-5 w-full px-6"
        >
            <input type="email" placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-lg bg-gradient-to-b from-slate-700 to-slate-950 text-white border-b border-green-800"
            />
            {emailErr && <p className="text-red-500 text-sm">{emailErr}</p>}

            <input type="password" placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 rounded-lg bg-gradient-to-b from-slate-700 to-slate-950 text-white border-b border-green-800"
            />
            {passErr && <p className="text-red-500 text-sm">{passErr}</p>}

            <div className="w-full">
                <button type="submit" disabled={load}
                    className="bg-slate-800 py-3 w-full rounded-full text-white uppercase
                    font-semibold border-b border-green-900 hover:opacity-95"
                >{load ? 'Signing Up...' : "signup"}</button>
            </div>
            <p className="mb-8 text-green-500 text-sm">{success}</p>
        </form>
    </div>
  )
}
export default Form