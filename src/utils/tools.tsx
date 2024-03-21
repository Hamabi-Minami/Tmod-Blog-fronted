

export const dateTrim = (dateTimeStr: string) =>{
    const dateTimeObj = new Date(dateTimeStr);

    // 获取日期部分
    const res = dateTimeObj.toLocaleDateString();

    return res
}