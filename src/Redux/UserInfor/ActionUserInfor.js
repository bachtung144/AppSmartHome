
export const ADD_PHONE = 'ADD_PHONE'
export const ADD_CALLINGCODE = 'ADD_CALLINGCODE'

export function AddPhone(phoneNumber) {
    return {type:ADD_PHONE,phoneNumber}
}

export function AddCallingCode(CallingCode) {
    return {type:ADD_CALLINGCODE,CallingCode}
}
