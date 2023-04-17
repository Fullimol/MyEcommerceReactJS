export const inputType = (string) => {
    switch (string) {
        case "precio":
            return "number"
        default:
            return "text"
    }
}

export const inputDisabled = (string) => {
    switch (string) {
        case 'id':
            return true
        default:
            return false;
    }
}