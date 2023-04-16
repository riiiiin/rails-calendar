import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3001/signup";

const Signup = () => {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [rePassword, setRePassword] = useState()

    const navigate = useNavigate();

    const signup = () => {
        axios.post(baseURL, {
            name: name,
            password: password,
            password_confirmation: rePassword
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
      <h1>新規登録ページ</h1>
      <div className="">
        <div className="">
            <label htmlFor="" className="">氏名</label>
            <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="">
            <label htmlFor="" className="">パスワード</label>
            <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="">
            <label htmlFor="" className="">確認用パスワード</label>
            <input type="text" name="password_confirmation" onChange={(e) => setRePassword(e.target.value)} />
        </div>
        <button className="" onClick={signup}>登録</button>
      </div>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Signup;