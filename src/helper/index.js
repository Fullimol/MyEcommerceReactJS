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

export const inputrequired = (string) => {
    switch(string) {
        case 'imagen':
            return false
        default:
            return true;
    }
}