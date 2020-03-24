export default function CheckActionNameForNavigate(command) {
  switch (command) {
    case 'power' : return 'ActionOnOffScreen';
    case 'color'  : return 'ActionChangeColorScreen';
    case 'temperature' : return 'ActionTemperatureScreen';
    case 'humidity' : return 'ActionHumidityScreen';
    case 'google_voice' : return 'ActionGoogleVoiceScreen';
  }
}
