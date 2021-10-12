import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import ListSubheader from '@mui/material/ListSubheader';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	pageContent: {
		padding: theme.spacing(3),
		borderRadius: '10px',
	},
}));

function CheckItems({
  callback,
  ...props
}) {
	const classes = useStyles();

	const item  = typeof callback === 'function' ? callback(props.ListAData, props.ListBData) : [];
  
	return (
		<div>
			<Paper className={classes.pageContent}>
				<List subheader={<ListSubheader>{props.title}</ListSubheader>}>
					{item.map((val) => {
						return (
							<ListItem key={val}>
								<ListItemIcon>
									<DoubleArrowIcon />
								</ListItemIcon>
								<ListItemText primary={val} />
							</ListItem>
						);
					})}
				</List>
			</Paper>
		</div>
	);
}

export default CheckItems;
