import React, { useContext } from 'react'
import { Context } from '../Context'
// import { UserForm } from '../components/UserForm'
// import { RegisterMutation } from '../container/RegisterMutation'
// import { LoginMutation } from '../container/LoginMutation'

export const Signup = () => {
  const { activateAuth } = useContext(Context)

  return <>
    {/* <RegisterMutation>
      {
        (register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
          }

          const errorMsg = error && 'El usuario ya existe o hay algún problema.'

          return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
        }
      }
    </RegisterMutation> */}
    <h1>Registrarse</h1>
  </>
}
