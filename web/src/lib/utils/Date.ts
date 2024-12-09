const getDate = (dayOffset : number) => {
    return new Date(+new Date() + (dayOffset * 86400000));
}

const addDays = (date: Date, addDays: number) => {
    return new Date(+date + (addDays * 86400000));
}

export const DateUtils = {
    getDate,
    addDays
}
