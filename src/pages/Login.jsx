import auth from '../services/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [credential, setCredential] = useState(true)
  const navigate = useNavigate()

  const handleOnChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onClickLogin = async () => {
    const res = await auth({ username, password })
    if (!res) {
      return setCredential(false)
    }
    sessionStorage.setItem('user', JSON.stringify(res.username))
    navigate('/')
  }

  return (
    <div className="flex sm:items-center justify-center h-screen sm:px-10 sm:px-6">
      <div className="sm:w-[30rem] w-full flex flex-col sm:gap-y-3 sm:border-solid sm:border-2 sm:border-gray-400 rounded-md">
        <div className="panel-heading bg-sky-500 p-3 text-white">
          <h3 className="font-bold">LOGIN USER</h3>
        </div>
        <div className="flex p-5 h-full items-center justify-center">
          <form className="form-horizontal flex flex-col sm:gap-y-5 gap-y-3 w-full" action="login.php" method="post">
            <div className="form-group flex flex-col sm:flex-row gap-1">
              <label htmlFor="Email" className="control-label w-28 sm:self-center sm:font-bold font-semibold">
                Email
              </label>
              <div className="w-full">
                <input onChange={handleOnChangeUsername} type="email" className="form-control w-full sm:p-3 p-2 ps-2 border-2 border-gray-400 rounded-md" id="Email" placeholder="Email" name="email" />
              </div>
            </div>
            <div className="form-group flex flex-col sm:flex-row gap-1">
              <label htmlFor="Pass" className="control-label w-28 sm:self-center sm:font-bold font-semibold">
                Password
              </label>
              <div className="w-full">
                <input onChange={handleOnChangePassword} type="password" className="form-control w-full sm:p-3 p-2 ps-2 border-2 border-gray-400 rounded-md" id="Pass" placeholder="Password" name="pass" />
              </div>
            </div>
            <div className="">
              <div className={`flex ${credential ? 'justify-end' : 'justify-between'}`}>
                <p className={`text-red-600 texs-sm ${credential ? 'hidden' : 'block'}`}>username or password incorrect</p>
                <button onClick={() => onClickLogin()} type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-2 sm:px-4 py-[0.4rem] px-4 rounded-md" id="btnLogin">
                  LOGIN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
