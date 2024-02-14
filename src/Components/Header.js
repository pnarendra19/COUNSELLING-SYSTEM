import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography,  } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {NavLink} from 'react-router-dom'
const Header = () => {
  const[value, setValue]=useState()
  return (
    <div>
      <AppBar sx={{backgroundColor: '#A52A2A'}}position='sticky'>
        <Toolbar>
          <AccountBalanceIcon/>
            <Typography>Counselling and Visitor Management System</Typography>
            <Tabs textColor='inherit' indicatorColor='primary'  sx={{ml: "auto"}} value={value} onChange={(e,val)=>setValue(val)}>
              <Tab LinkComponent={NavLink} to='/SignUp' label='SignUp'/>
              <Tab LinkComponent={NavLink} to='/SignIn' label='SignIn'/>
              <Tab LinkComponent={NavLink} to='/Counsellor' label='Counsellor'/>
              <Tab LinkComponent={NavLink} to='/Visitor' label='Visitor'/>
              <Tab LinkComponent={NavLink} to='/Appointment' label='Appointment'/>
              <Tab LinkComponent={NavLink} to="/AboutUs"label='AboutUs'/>
              <Tab LinkComponent={NavLink} to="/FetchRegistrations"label='FetchRegistrations'/>
            </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header