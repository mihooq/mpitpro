'use client'

import { Grid } from "@mui/material"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import { useForm } from "react-hook-form"

interface FormData {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
}

export default function SignUp() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>()

  const onSubmit = handleSubmit(data => alert(data))

  return <form onSubmit={onSubmit}>
        <List
        sx={{
          width: '40%'
        }}
        >
          <ListItem>
            <label htmlFor="firstname">Имя</label>
            <input {...register('firstname')}/>
          </ListItem>
          <ListItem>
            <label htmlFor="lastname">Фамилия</label>
            <input {...register('lastname')}/>
          </ListItem>
          <ListItem>
            <label htmlFor="email">Электронная почта</label>
            <input {...register('email')}/>
          </ListItem>
          <ListItem>
            <label htmlFor="password">Пароль</label>
            <input {...register('password')}/>
          </ListItem>
          <ListItem>
            <input type="submit"></input>
          </ListItem>
        </List>
      </form>
}