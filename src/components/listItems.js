import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CodeIcon from '@material-ui/icons/Code';
import BarChartIcon from '@material-ui/icons/BarChart';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



export const mainListItems = (

  <div>
{/* Profile link */}
      <Link
            color="inherit"
            href="#"
            component={NavLink}
            to="/Profile"
        >
    <ListItem button>
	<ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
          </Link>
{/* Dashboard link */}
      <Link
            color="inherit"
            href="#"
            component={NavLink}
            to="/dashboard"
        >
    <ListItem button>
	<ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
          </Link>
{/* Orders link */}
    <Link
            color="inherit"
            href="#"
            component={NavLink}
            to="/orders"
        >
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
    </Link>
{/* Trade link */}
    <Link
            color="inherit"
            href="#"
            component={NavLink}
            to="/trade"
        >
        <ListItem button>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="Trade" />
        </ListItem>
    </Link>
{/* Accounts link */}
    <Link
            color="inherit"
            href="#"
            component={NavLink}
            to="/accounts"
        >
        <ListItem button>
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="Accounts" />
        </ListItem>
    </Link>
{/* Portfolio link */}
    <Link
            color="inherit"
            href="#"
            component={NavLink}
            to="/portfolio"
        >
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>
    </Link>
{/* Subscriptions link */}
    <Link
            color="inherit"
            href="#"
            component={NavLink}
            to="/subscriptions"
        >
        <ListItem button>
          <ListItemIcon>
            <SubscriptionsIcon />
          </ListItemIcon>
          <ListItemText primary="Subscriptions" />
        </ListItem>
    </Link>
{/* Develop link */}
    <Link
            color="inherit"
            href="#"
            component={NavLink}
            to="/develop"
        >
          <ListItem button>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary="Develop" />
        </ListItem>
    </Link>
{/* Support link */}
    <Link
            color="inherit"
            href="#"
            component={NavLink}
            to="/support"
        >
          <ListItem button>
          <ListItemIcon>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
    </Link>
  </div>
)

