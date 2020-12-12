import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    console.log(confirmed);
    lastUpdate = new Date(lastUpdate).toDateString();
    const countUpDuration = 1.5;
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} className={styles.gridContainer} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={countUpDuration} separator="." />
                        </Typography>
                        <Typography variant="body2" color="error">
                            {confirmed.value === 0 && <p>Possibly not available</p>}
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate}</Typography>
                        <Typography variant="body2">COVID-19 cases that have been confirmed</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={countUpDuration} separator="." />
                        </Typography>
                        <Typography variant="body2" color="error">
                            {recovered.value === 0 && <p>Possibly not available</p>}
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={countUpDuration} separator="." />
                        </Typography>
                        <Typography variant="body2" color="error">
                            {deaths.value === 0 && <p>Possibly not available</p>}
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
                {/* test */}
                <Grid item component={Card} xs={12} md={6} className={cx(styles.card, styles.active)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Active
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value - recovered.value - deaths.value} duration={countUpDuration} separator="." />
                        </Typography>
                        <Typography variant="body2" color="error">
                            {deaths.value === 0 && <p>Possibly not available</p>}
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate}</Typography>
                        <Typography variant="body2">Number of active COVID-19 cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
