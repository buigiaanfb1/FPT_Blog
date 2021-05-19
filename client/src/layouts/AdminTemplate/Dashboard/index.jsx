import React, { useMemo } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useStyles } from './styles';
import ToolbarsEditor from './../ToolbarsEditor';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import EditPost from '../EditPost';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://chiaseitdev.com/">
        Chiaseitdev
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Dashboard = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const [open, setOpen] = React.useState(true);
  const [changeTab, setChangeTab] = React.useState('add');

  useMemo(() => {
    if (!localStorage.getItem('ADMIN')) {
      history.replace('/admin');
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleCheckUpload = () => {
    if (!localStorage.getItem('ADMIN')) {
      return;
    } else {
      return (
        <Button
          className={classes.buttonUpload}
          variant="contained"
          color="primary"
          onClick={() => props.beginUpload()}
        >
          UPLOAD IMAGE
        </Button>
      );
    }
  };

  const handleRenderChangeTab = () => {};

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Box
          className={classes.containerIcon}
          onClick={() => setChangeTab('add')}
        >
          <AddBoxIcon className={classes.icon} />
          <Typography className={classes.textIcon}>Thêm bài viết</Typography>
        </Box>
        <Box
          className={classes.containerIcon}
          onClick={() => setChangeTab('edit')}
        >
          <EditIcon className={classes.icon} />
          <Typography className={classes.textIcon}>
            Chỉnh sửa bài viết
          </Typography>
        </Box>
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container>
            {changeTab === 'add' ? (
              <Grid item xs={12}>
                <Box className={classes.wrapperButton}>
                  <Typography className={classes.noteUpload}>
                    Gửi ảnh lên Cloudinary
                  </Typography>
                  {handleCheckUpload()}
                </Box>
                <ToolbarsEditor />
              </Grid>
            ) : (
              <EditPost />
            )}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
