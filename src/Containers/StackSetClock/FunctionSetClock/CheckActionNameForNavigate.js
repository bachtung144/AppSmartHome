export default function CheckActionNameForNavigate(ActionName) {
    if(ActionName === 'Bật-Tắt') return 'ActionOnOffScreen';
    if(ActionName === 'Đổi màu') return 'ActionChangeColorScreen';
    if(ActionName === 'Nhạc chuông') return 'ActionMusicScreen';
}
