import Image from 'next/image'
import { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import isEmail from 'validator/lib/isEmail'

import useAuth from '../../hooks/useAuth'
import Logo from '../../public/logo.png'

const AuthForm = ({ setFormLogin, formLogin }) => {
  const { initWhitGoogle, initWhitEmail } = useAuth()

  const [loadingGoogle, setLoadingGoogle] = useState(false)
  const [loadingEmail, setLoadingEmail] = useState(false)
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
  })
  const { email, password } = dataForm

  const changeForm = () => {
    setFormLogin(!formLogin)
  }

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleInitWhitEmailAndPassword = (e) => {
    e.preventDefault()

    // Validations
    if (!isEmail(email)) {
      toast.warning('El formato del correo es incorrecto')
      return
    }

    if (password.trim().length < 6) {
      toast.warning('La combinación entre correo y contraseña no es correcta')
      return
    }

    initWhitEmail(email, password, setLoadingEmail)
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div>
        <Image src={Logo} width={100} height={100} layout='fixed' alt='Logo' />
      </div>
      <div className='bg-white rounded-md p-5 shadow-lg'>
        <form
          className='flex flex-col'
          onSubmit={handleInitWhitEmailAndPassword}
        >
          <h1 className='text-2xl font-semibold text-center'>Iniciar sesión</h1>
          <input
            className='mt-4 p-2 rounded-md outline-none border-2 border-gray-200'
            type='text'
            placeholder='Correo electrónico'
            name='email'
            value={email}
            onChange={handleChange}
          />
          <input
            className='mt-4 p-2 rounded-md outline-none border-2 border-gray-200'
            type='password'
            placeholder='Contraseña'
            name='password'
            value={password}
            onChange={handleChange}
          />
          <button
            className='flex items-center justify-center text-white rounded-md bg-blue-600 px-4 py-2 mt-4 cursor-pointer text-lg hover:bg-blue-500'
            type='submit'
            disabled={loadingEmail}
          >
            <span className='flex items-center justify-center mr-2'>
              <ClipLoader color='#fff' loading={loadingEmail} size={20} />
            </span>
            Iniciar sesión
          </button>
        </form>
        <div className='flex flex-col items-center'>
          <p className='mt-4 pb-0'>Crea una nueva cuenta ó inicia con Google</p>
          <button
            className='text-white rounded-md bg-green-500 px-4 py-2 mt-4 w-2/4 hover:bg-green-400'
            onClick={changeForm}
          >
            Crear cuenta
          </button>
          <button
            className='flex items-center justify-center text-white rounded-md bg-gray-600 px-4 py-2 mt-4 hover:bg-gray-500'
            onClick={() => initWhitGoogle(setLoadingGoogle)}
            disabled={loadingGoogle}
          >
            <span className='flex items-center justify-center mr-2'>
              <ClipLoader color='#fff' loading={loadingGoogle} size={20} />
            </span>
            Inicia con Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
