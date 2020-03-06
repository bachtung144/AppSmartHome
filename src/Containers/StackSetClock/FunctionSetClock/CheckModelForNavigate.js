
/**
 * @return {string}
 */
export default function CheckModel(deviceModel) {
        if (deviceModel === 'hp_1') return 'ActionOnOffScreen';
        if (deviceModel === 'hp_2' || deviceModel === 'hp_3' || deviceModel === 'hp_4' )
            return 'ListSetActionScreen'
}
