import { ThemeProvider } from '@emotion/react'
import { ArrowForward } from '@mui/icons-material'
import { Box, Card, CardActions, CardContent, CardHeader, CssBaseline, Icon, IconButton, Typography } from '@mui/material'
import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import theme from '../../theme'

interface DashboardCardProps {
    title: string,
    value: number,
    icon: ReactNode,
    link: string | '',
    cardColor: string
}

const DashboardCard: FC<DashboardCardProps> = ({ title, value, icon, link, cardColor }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Card elevation={4} sx={{backgroundColor: `${cardColor}`, padding: 2, borderRadius: 4}}>
                    <CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography>{title}</Typography>
                            <Icon>{icon}</Icon>
                        </Box>
                        <Typography>{value}</Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={link} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <Typography>
                                Подробнее
                            </Typography>
                            <IconButton>
                                <ArrowForward />
                            </IconButton>
                        </Link>
                    </CardActions>
                </Card>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default DashboardCard