import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Box, createTheme, ThemeProvider } from '@mui/material'

export default function TabsComponent({ coins }) {
  const [value, setValue] = React.useState('grid')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const tabStyle = {
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 100,
    textTransform: 'capitalize',
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff000',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Grid" value="grid" sx={tabStyle} />
          <Tab label="List" value="list" sx={tabStyle} />
        </Tabs>
        <Box sx={{ padding: 2 }}>
          <div hidden={value !== 'grid'}>
            <div>
              {coins.length === 0 ? (
                <p>No data available</p>
              ) : (
                coins.map((item, i) => (
                  <p key={item.id}>
                    {i + 1}. {item.name}
                  </p>
                ))
              )}
            </div>
          </div>
          <div hidden={value !== 'list'}>
            <div>
              {coins.length === 0 ? (
                <p>No data available</p>
              ) : (
                coins.map((item, i) => (
                  <p key={item.id}>
                    {i + 1}. {item.name}
                  </p>
                ))
              )}
            </div>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
