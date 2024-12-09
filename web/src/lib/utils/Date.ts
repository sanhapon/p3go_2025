export const getDate = (dayOffset : number) => {
    return new Date(+new Date() + (dayOffset * 86400000));
}
