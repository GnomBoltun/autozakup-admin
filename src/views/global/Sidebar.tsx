import React, { FC, ReactChild, ReactChildren, ReactNode } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';
import { ArrowBack, ArticleOutlined, MoreHoriz, PendingActions, TrendingUp, Window } from '@mui/icons-material';
import { Avatar, Badge, TextField } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


const drawerWidth = 360;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    backgroundColor: '#292F51',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#292F51',
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

interface SidebarProps {
    children: ReactNode
}

const Sidebar:FC<SidebarProps> = ({children}) => {

    dayjs.locale('ru')

    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Drawer variant="permanent" open={open} sx={{ backgroundColor: 'secondary'}}>
                    <DrawerHeader>
                        {open ?
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <Typography sx={{ color: 'white', fontWeight: 600, fontSize: 20, paddingLeft: 1 }}>
                                    AutoZakup
                                </Typography>
                                <IconButton sx={{ color: 'white' }} onClick={handleDrawerClose}>
                                    <ArrowBack />
                                </IconButton>
                            </Box>
                            :
                            <IconButton sx={{ color: 'white' }} onClick={handleDrawerOpen}>
                                <MenuIcon></MenuIcon>
                            </IconButton>
                        }

                    </DrawerHeader>
                    <Divider />
                    <Box sx={open ? { width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#1E617A', paddingY: 5 } : { width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={open ? { display: 'flex', width: '85%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } : { display: 'none' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Box sx={{ width: 12, height: 12, borderRadius: '100%', backgroundColor: '#00FF38' }}></Box>
                                <Typography variant='body2' color='white' sx={{ paddingLeft: 1 }}>В сети</Typography>
                            </Box>
                            <IconButton>
                                <MoreHoriz sx={{ color: 'white' }} />
                            </IconButton>
                        </Box>
                        <Avatar src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" sx={open ? { width: 120, height: 120 } : {}}></Avatar>
                        <Typography variant='h5' fontWeight={600} color='white' sx={open ? {} : { display: 'none' }}>
                            Admin User
                        </Typography>
                        <Typography variant='body1' fontWeight={400} color='white' sx={open ? { opacity: 0.3 } : { display: 'none' }}>
                            adminuser@gmail.com
                        </Typography>
                    </Box>
                    <List sx={{ paddingTop: 3 }}>
                        {['Главная', 'Лицензии', 'Опыт работы', 'Заявки'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                        color: 'white'
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                            color: '#FDCF6F'
                                        }}
                                    >
                                        {index === 0 ? <Window /> : index === 1 ? <ArticleOutlined /> : index === 2 ? <TrendingUp /> : <PendingActions />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box sx={open ? { width: '80%',position: 'absolute', left: 20, bottom: 20} : {display: 'none'}}>
                            <StaticDatePicker
                                InputProps={{sx:{'&. MuiPickerStaticWrapper-content': {minWidth: '200px'}}}}
                            displayStaticWrapperAs="desktop"
                            openTo="year"
                            value={value}
                            onChange={(newValue: any) => {
                                setValue(newValue);
                            }}
                            renderInput={(params: any) => <TextField {...params} />}
                            />
                        </Box>

                    </LocalizationProvider>
                </Drawer>
                {children}
            </CssBaseline>
        </ThemeProvider>
    )
}

export default Sidebar