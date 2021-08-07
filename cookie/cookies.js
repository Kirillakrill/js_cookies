{
    "use strict";

    function setcookie(name, value, expire) {

        let exp = new Date();

        let cookieExpire = exp.getTime() + expire;

        exp.setTime(cookieExpire);

        document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();

    }

    // Функция чтения cookies:
    function getcookie(Name) {
        let search = Name + "=";
        {

            offset = document.cookie.indexOf(search);

            if (offset != -1) {
                offset += search.length;

                end = document.cookie.indexOf(";", offset);

                if (end == -1) {
                    end = document.cookie.length
                }
                return (document.cookie.substring(offset, end));

            }
        }
    }
}