import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: theme.spacing(16),
        },
    },
}));

const useStylesTypography = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});

export default function SimplePaper() {
    const classes = useStyles();
    const classesTypo = useStylesTypography();
    const [globalData, setGlobalData] = useState();
    const [dataLoading, setdataLoading] = useState(false);
    useEffect(
        () => {
            async function fetchGlobalData() {
                setdataLoading(true)
                const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
                //console.log("data:", apiResponse)
                const dataFormateAPI = await apiResponse.json();
                console.log("data2:", dataFormateAPI)
                setGlobalData(dataFormateAPI)
                setdataLoading(false)
            }
            fetchGlobalData()
        }, []
    )
    const load = 'Loading';
    if (dataLoading) {
        return (
            <div >
                <Typography variant="h4" gutterBottom style={{ color: 'black', fontweight: 'bold' }}>
                    Global Data
            </Typography>
                <div className={classes.root}>
                    <Paper elevation={3}>
                        <div className={classesTypo.root}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black' }}>
                                {

                                    load}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom style={{ color: 'black', fontweight: 'bold' }}>
                                Total Cases
                    </Typography>
                        </div>
                    </Paper>

                    <Paper elevation={3}>
                        <div className={classesTypo.root}>
                            <Typography variant="h4" gutterBottom style={{ color: 'green' }}>
                                {load}

                            </Typography>
                            <Typography variant="subtitle2" gutterBottom gutterBottom style={{ color: 'green', fontweight: 'bold' }}>
                                Recovered
                    </Typography>
                        </div>

                    </Paper>
                    <Paper elevation={3}>
                        <div className={classesTypo.root}>
                            <Typography variant="h4" gutterBottom style={{ color: 'red' }}>
                                {load}

                            </Typography>
                            <Typography variant="subtitle2" gutterBottom gutterBottom style={{ color: 'red', fontweight: 'bold' }}>
                                Fatalities
                    </Typography>
                        </div>

                    </Paper>
                </div>
            </div>
        );
    }
    return (
        <div >


            <Typography variant="h4" gutterBottom style={{ color: 'black', fontweight: 'bold' }}>
                Global Data
            </Typography>

            <div className={classes.root}>
                <Paper elevation={3}>
                    <div className={classesTypo.root}>
                        <Typography variant="h4" gutterBottom style={{ color: 'black' }}>
                            <NumberFormat value={

                                globalData && globalData.results && globalData.results[0].total_cases} displayType={'text'} thousandSeparator={true} prefix={''} />
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom style={{ color: 'black', fontweight: 'bold' }}>
                            Confirmed Cases
                        </Typography>
                    </div>
                </Paper>

                <Paper elevation={3}>
                    <div className={classesTypo.root}>
                        <Typography variant="h4" gutterBottom style={{ color: 'green' }}>
                            <NumberFormat value={

                                globalData && globalData.results && globalData.results[0].total_recovered} displayType={'text'} thousandSeparator={true} prefix={''} />



                        </Typography>
                        <Typography variant="subtitle2" gutterBottom gutterBottom style={{ color: 'green', fontweight: 'bold' }}>
                            Recovered
                        </Typography>
                    </div>

                </Paper>
                <Paper elevation={3}>
                    <div className={classesTypo.root}>
                        <Typography variant="h4" gutterBottom style={{ color: 'red' }}>
                            <NumberFormat value={

                                globalData && globalData.results && globalData.results[0].total_deaths} displayType={'text'} thousandSeparator={true} prefix={''} />


                        </Typography>
                        <Typography variant="subtitle2" gutterBottom gutterBottom style={{ color: 'red', fontweight: 'bold' }}>
                            Fatalities
                        </Typography>
                    </div>

                </Paper>
            </div>
        </div>
    );
}
