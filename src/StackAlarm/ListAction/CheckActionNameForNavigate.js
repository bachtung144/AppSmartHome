export default function CheckActionNameForNavigate(command) {
    switch (command) {
        case 'power' : return 'ActionPowerScreen';
        case 'color'  : return 'ActionColorScreen';
        case 'temperature' : return 'ActionTemperatureScreen';
        case 'humidity' : return 'ActionHumidityScreen';
        case 'google_voice' : return 'ActionGoogleVoiceScreen';
    }
}
