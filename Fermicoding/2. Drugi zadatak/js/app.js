document.getElementById('checkDate').addEventListener('click', () => {
    var f_day = document.getElementById('f_day').value;
    var f_month = document.getElementById('f_month').value;
    var f_year = document.getElementById('f_year').value;

    var t_day = document.getElementById('t_day').value;
    var t_month = document.getElementById('t_month').value;
    var t_year = document.getElementById('t_year').value;

    var connditionMet = false;

    //from
    if (f_day < 0 || f_day > 31 || f_day === '') {
        document.getElementById('f_day').classList.add('error-border');
        connditionMet = false;
        return connditionMet;
    } else {
        document.getElementById('f_day').classList.remove('error-border');

    }
    if (f_month < 0 || f_month > 12 || f_day === '') {
        document.getElementById('f_month').classList.add('error-border');
        connditionMet = false;
        return connditionMet;
    } else {
        document.getElementById('f_month').classList.remove('error-border');
        connditionMet = true;
        if (f_month === '2') {
            if (f_day > 28) {
                document.getElementById('f_day').classList.add('error-border');
                connditionMet = false;
                return connditionMet;
            }
        }
        if (f_month === '4') {
            if (f_day > 30) {
                document.getElementById('f_day').classList.add('error-border');
                connditionMet = false;
                return connditionMet;
            }
        }
        if (f_month === '6') {
            if (f_day > 30) {
                document.getElementById('f_day').classList.add('error-border');
                connditionMet = false;
                return connditionMet;
            }
        }
        if (f_month === '9') {
            if (f_day > 30) {
                document.getElementById('f_day').classList.add('error-border');
                connditionMet = false;
                return connditionMet;
            }
        }
        if (f_month === '11') {
            if (f_day > 30) {
                document.getElementById('f_day').classList.add('error-border');
                connditionMet = false;
                return connditionMet;

            }

        }

    }
    if (f_year < 0 || f_year === '') {
        document.getElementById('f_year').classList.add('error-border');
        connditionMet = false;
        return connditionMet;
    } else {
        if ((0 == f_year % 4) && (0 != f_year % 100) || (0 == f_year % 400)) {
            if (f_month === '2') {
                if (f_day > 29) {
                    document.getElementById('f_day').classList.add('error-border');
                    alert('sta ne valja');
                    connditionMet = false;
                    return connditionMet;
                }else if(f_day === '29'){
                    connditionMet = true;
                    alert(connditionMet);
                    document.getElementById('f_day').classList.remove('error-border');
                }
            }

        } else {
            console.log(f_year + ' is not a leap year');
        }
        document.getElementById('f_year').classList.remove('error-border');
        connditionMet = true;
    }



    //to
    if (t_day < 0 || t_day > 31 || t_day === '') {
        document.getElementById('t_day').classList.add('error-border');
        connditionMet = false;
        return connditionMet;
    } else {
        document.getElementById('t_day').classList.remove('error-border');
        connditionMet = true;
    }
    if (t_month < 0 || t_month > 12 || t_day === '') {
        document.getElementById('t_month').classList.add('error-border');
        connditionMet = false;
        return connditionMet;
    } else {
        document.getElementById('t_month').classList.remove('error-border');
        connditionMet = true;
        if (f_month === '2') {
            if (f_day > 28) {
                document.getElementById('t_day').classList.add('error-border');
                connditionMet = false;
                return connditionMet;
            }
        }
        if (t_month === '4') {
            if (f_day > 30) {
                document.getElementById('t_day').classList.add('error-border');
                connditionMet = false;
                return connditionMet;
            }
        }
        if (t_month === '6') {
            if (f_day > 30) {
                document.getElementById('t_day').classList.add('error-border');
                connditionMet = false;
                return connditionMet;
            }
        }
        if (t_month === '9') {
            if (f_day > 30) {
                document.getElementById('t_day').classList.add('error-border');
                connditionMet = false;
                return connditionMet;
            }
        }
        if (t_month === '11') {
            if (f_day > 30) {
                document.getElementById('t_day').classList.add('error-border');
                connditionMet = false;
                return connditionMet;

            }

        }
    }
    if (t_year < 0 || t_year === '') {
        document.getElementById('t_year').classList.add('error-border');
        connditionMet = false;
        return connditionMet;
    } else {
        document.getElementById('t_year').classList.remove('error-border');
        connditionMet = true;
    }

    if(connditionMet){

        if(t_year < f_year){
            document.getElementById('f_year').classList.add('error-border');
            alert('OD godina mora da bude manja ili jednaka sa godinom DO');
        }else{
            document.getElementById('f_year').classList.remove('error-border');
            if(f_year === t_year){
                if(f_month > t_month){
                    document.getElementById('f_month').classList.add('error-border');
                    alert('OD mjesec mora da bude manji ili jednak DO mjesecu');

                }else{
                    document.getElementById('f_year').classList.remove('error-border');
                    if(f_day > t_day){
                        document.getElementById('f_day').classList.add('error-border');
                        alert('OD dan mora da bude manji ili jednak DO danu');
                    }else{
                        document.getElementById('f_day').classList.remove('error-border');
                        alert('Datumi su validni');
                    }
                }

            }else{
                alert('Datumi su validni');
            }
        }

    }

});