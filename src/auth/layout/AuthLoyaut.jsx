import { Grid, Typography } from '@mui/material'

export const AuthLoyaut = ({ children, title = '' }) => {
  return (
    <Grid 
      container
      spacing = { 0 }
      direction = "column"
      alignItems="center"
      justifyContent= "center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', paddind: 4 }}
    >

      <Grid item
        className="box-shadow"
        xs={ 3 }
        sx={{
            width: { sm: 450, md: 450 },
            backgroundColor: 'white', 
            paddind: 3, 
            borderRadius: 2,
             }}
      >
          <Typography variant="h5" align="center" sx={{ mb:1, mt:2 }}>{ title }</Typography>
          { children }
      </Grid>

    </Grid>
  )
}
