import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

const AuthForm = ({ formLogin, setFormLogin }) => {
  if (formLogin)
    return <LoginForm formLogin={formLogin} setFormLogin={setFormLogin} />

  return <RegisterForm formLogin={formLogin} setFormLogin={setFormLogin} />
}

export default AuthForm
