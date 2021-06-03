const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

const getDateArray = (start, end) => {
    let arr = new Array();
    let dt = new Date(start);
    while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  }

const validatePassword = (password) => {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/.test(password)) return true;
    return false;
}

const validateEmail = (email) => {
  return email.includes(email.match(/^[\w\d\.\-]+\@[\w\d]+\.[\w\d]+$/));
};

module.exports = {
    formatDate,
    getDateArray,
    validatePassword,
    validateEmail
};