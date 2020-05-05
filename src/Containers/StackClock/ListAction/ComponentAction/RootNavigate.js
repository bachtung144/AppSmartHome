import NavigationService from '../../../../Function/NavigationService';

export default function RootNavigate(arr_action, callback, command, value) {
  let checkNavi =
    arr_action.length !== 1 ? 'ListActionScreen' : 'TermActionScreen';
  NavigationService.navigate(checkNavi, {
    arr_action_done: arr_action,
    callback: callback,
    command: command,
    value: value,
  });
}
