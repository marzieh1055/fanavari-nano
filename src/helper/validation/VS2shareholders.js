export const  VS2shareholders = (data) => {
    const errArry = []
    data.map((item , index) => {
        const errObj = {}
        Object.keys(item).map(i => {
            if (item[i] === "") {
                errObj[i] = "این فیلد نباید خالی باشد"
            } else {
                delete errObj[i]
            }
        })
        errArry.push(errObj)
        
        // console.log(errObj);
    })

    return errArry
}