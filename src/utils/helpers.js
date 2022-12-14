/* eslint-disable no-useless-escape */
export const patternValidation = URL => {
    const regex = new RegExp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?|^((http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$')

    return regex.test(URL)
};

export const removeHttp = URL => {
    return URL.replace(/^https?:\/\//, '');
}

export const removeRestUrl = URL => {
   return URL.split('/', 1)[0]
}