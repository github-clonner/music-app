import { NavigationActions } from 'react-navigation';
import { Navigator } from '../router';

const initState = Navigator.router.getStateForAction(
    Navigator.router.getActionForPathAndParams('Loading')
);

export default (state = initState, action) => {
   const nextState = Navigator.router.getStateForAction(
       NavigationActions.navigate({ routeName: action.type }),
       state
   );

   return nextState || state;
};