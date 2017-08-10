import React from 'react';
import {
   Page,
   Spinner
} from '../../common';
import styles from './styles';

export const LoadingScreen = () => (
    <Page style={styles.wrapper}>
       <Spinner centered color={'#000'} />
    </Page>
);