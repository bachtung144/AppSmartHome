export default function InitArrayAction(deviceModel) {
    if (deviceModel === 'hp_2')
        return [{id:1,ActionName:'Bật-Tắt'},{id:2,ActionName:'Đổi màu'}]
    if (deviceModel === 'hp_3')
        return [{id:1,ActionName:'Đổi màu'},{id:2,ActionName:'Nhạc chuông'}]
    if (deviceModel === 'hp_4')
        return [{id:1,ActionName:'Bật-Tắt'},{id:2,ActionName:'Đổi màu'},{id:3,ActionName:'Nhạc chuông'}]
}
