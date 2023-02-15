import { Grid } from '@mui/material'
import React from 'react'
import DashboardCard from '../../Components/DasboardCard'
import { People } from '@mui/icons-material'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <Grid gridRow={4} container spacing={4} sx={{margin: 0 ,marginRight: 4}}>
      <Grid item xs={3}>
        <DashboardCard title='Выигранные конкурсы' value={20} icon={<People/>} link='/' cardColor='cyan'/>
      </Grid>
      <Grid item xs={3}>
        <DashboardCard title='Выигранные конкурсы' value={20} icon={<People/>} link='/' cardColor='cyan'/>
      </Grid>
      <Grid item xs={3}>
        <DashboardCard title='Выигранные конкурсы' value={20} icon={<People/>} link='/' cardColor='cyan'/>
      </Grid>
      <Grid item xs={3}>
        <DashboardCard title='Выигранные конкурсы' value={20} icon={<People/>} link='/' cardColor='cyan'/>
      </Grid>
    </Grid>
  )
}

export default Dashboard