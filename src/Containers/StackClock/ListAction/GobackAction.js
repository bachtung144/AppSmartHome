export default function GobackAction(routeNameListAction,LastRouteName)  {
    if(routeNameListAction !== 'default value') return 'ListActionScreen'
    else return LastRouteName;
};
