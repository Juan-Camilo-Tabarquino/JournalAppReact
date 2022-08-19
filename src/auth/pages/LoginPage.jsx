import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLoyaut } from '../layout/AuthLoyaut'
import { useForm } from '../../hooks'
import { startGoogleSingIn, startLoginWithEmailPassword } from '../../store/auth'

const formData = {
  email: '',
  password: '',
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm( formData )

  const isAuthenticating = useMemo( () => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch( startLoginWithEmailPassword({ email, password }) )
  }

  const onGoogleSingIn = () => {
    dispatch( startGoogleSingIn() )
  }

  return (
    <AuthLoyaut title='Login'>
          <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
            <Grid container>

                <Grid item xs={ 12 } sx={{ mt: 2, ml: 2, mr: 2 }}>
                  <TextField 
                    label="Correo" 
                    type="email" 
                    placeholder="Correo"
                    fullWidth
                    name="email"
                    value={ email }
                    onChange={ onInputChange }
                  />
                </Grid>

                <Grid item xs={ 12 } sx={{ mt: 2, mb: 2, ml: 2, mr: 2 }}>
                  <TextField 
                    label="Contraseña" 
                    type="password" 
                    placeholder="Contraseña"
                    fullWidth
                    name="password"
                    value={ password }
                    onChange={ onInputChange }
                  />
                </Grid>

                <Grid container spacing={0.20} sx={{ mb:2, ml:2, mr:2 }}>

                    <Grid 
                        item 
                        xs={ 12 } 
                        sm ={ 12 }
                        display={ !!errorMessage ? '' : 'none' }
                      >
                        <Alert severity='error'>{ errorMessage }</Alert>
                    </Grid>

                    <Grid item xs={ 12 } sm ={ 6 }>

                      <Button
                        disabled = { isAuthenticating }
                        type="submit" 
                        variant='contained' 
                        fullWidth>
                          Login
                      </Button>
                    </Grid>
                    
                    <Grid item xs={ 12 } sm ={ 6 }>
                      <Button 
                        disabled = { isAuthenticating }
                        onClick={ onGoogleSingIn } 
                        variant='contained' 
                        fullWidth>
                        <Google />
                        <Typography sx={{ml:1}}>Google</Typography>
                      </Button>
                    </Grid>

                </Grid>

                <Grid container direction='row' justifyContent='end'>
                  <Link component={ RouterLink } sx={{mr:2, mb:2}} color='inherit' to='/auth/register'>
                    Crear una cuenta
                  </Link>
                </Grid>

            </Grid>
          </form>
    
    </AuthLoyaut>
  )
}
