
/**
 * @return {string}
 */
// export default function CheckModel(deviceModel) {
//         if (deviceModel === 'hp_1') return 'ActionOnOffScreen';
//         if (deviceModel === 'hp_2' || deviceModel === 'hp_3' || deviceModel === 'hp_4' )
//             return 'ListSetActionScreen'
// }
export default function CheckModel(arrayAction:[]) {
    if (arrayAction.length === 1) {
        if(arrayAction[0].command === 'power') return 'ActionOnOffScreen';
    }
    else return 'ListSetActionScreen'
}
