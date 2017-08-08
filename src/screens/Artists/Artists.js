import React from 'react';
import {
   Page,
   Text
} from '../../common';

class Artists extends React.Component {
   render() {
      return (
          <Page>
             <Text.Default>{'Artists Page'}</Text.Default>
          </Page>
      );
   }
}

export const ArtistsScreen = Artists;