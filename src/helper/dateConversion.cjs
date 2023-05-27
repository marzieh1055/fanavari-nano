import moment from 'jalali-moment'
export const dateConversion = (event) => {
    const miladi = event.split(".")[0]
    const date = moment(miladi , 'YYYY-MM-DDTHH:mm:ss')
    const shamsi = date.format('jYYYY/jM/jD HH:mm')
    return shamsi
  }