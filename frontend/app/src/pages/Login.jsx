import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3001/login";

const Login = () => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate()

    const signup = () => {
        axios.post(baseURL, {
            name: name,
            password: password,
        })
        .then(response => {
            console.log(response)
            // if (response["status"] == "200") {
            //     navigate('/');
            // }
        })
        .catch(error => {
            console.log(error);
        });
    }

  return (
    <>
      <h1>ログインページ</h1>
      <div className="">
        <div className="">
            <label htmlFor="" className="">氏名</label>
            <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="">
            <label htmlFor="" className="">パスワード</label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="" onClick={signup}>ログイン</button>
      </div>
      <div>
        新規登録は<Link to={`/register/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Login;