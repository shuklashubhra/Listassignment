import React, { useCallback } from 'react';
import CustomList from '../components/CustomList';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CheckItems from '../components/CheckItems';
import { makeStyles } from '@mui/styles';
import { arrayDiff, arrayIntersection, arrayUnion } from '../utils/helper';

const useStyles = makeStyles((theme) => ({
	buttonStyle: {
		display: 'flex',
		padding: theme.spacing(3),
		justifyContent: 'center',
	},
}));

function Container() {
	const classes = useStyles();
	const [listAItems, setListAItems] = React.useState(['Orange', 'Apple']);
	const [listBItems, setListBItems] = React.useState(['Apple', 'Mango']);
	const [isComputed, setIsComputed] = React.useState(false);

	const handleListClick = useCallback((item, listType) => {
		listType === 'A'
			? setListAItems((prev) => {
					prev.push(item);
					return prev;
			  })
			: setListBItems((prev) => {
					prev.push(item);
					return prev;
			  });
	}, []);

	const toggleIsCompute = () => {
		setIsComputed(true);
	};

	return (
		<Grid container>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<CustomList
						label="Add list A items"
						handleClick={(item) => handleListClick(item, 'A')}
						listData={listAItems}
					/>
				</Grid>
				<Grid item xs={6}>
					<CustomList
						label="Add list B items"
						handleClick={(item) => handleListClick(item, 'B')}
						listData={listBItems}
					/>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<div className={classes.buttonStyle}>
					<Button variant="contained" color="primary" onClick={toggleIsCompute}>
						Compute
					</Button>
				</div>
			</Grid>
			{isComputed && (
				<Grid>
					<Grid container spacing={3}>
						<Grid item xs={3}>
							<CheckItems
								title="Items only in List A"
								ListAData={listAItems}
								ListBData={listBItems}
								callback={arrayDiff}
							/>
						</Grid>
						<Grid item xs={3}>
							<CheckItems
								title="Items only in List B"
								ListAData={listBItems}
								ListBData={listAItems}
								callback={arrayDiff}
							/>
						</Grid>
						<Grid item xs={3}>
							<CheckItems
								title="Items in both A and B"
								ListAData={listAItems}
								ListBData={listBItems}
								callback={arrayIntersection}
							/>
						</Grid>
						<Grid item xs={3}>
							<CheckItems
								title="Items combined A and B (uniquely)"
								ListAData={listAItems}
								ListBData={listBItems}
								callback={arrayUnion}
							/>
						</Grid>
					</Grid>
				</Grid>
			)}
		</Grid>
	);
}

export default Container;
