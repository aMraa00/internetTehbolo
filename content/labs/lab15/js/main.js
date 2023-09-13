//ES5
function translate(quesyion, lang){
    if(lang === undefined) lang = 'en';

    switch(lang)
    {
        case 'mn': console.log('Дараах өгүүлбэрийг орчуул: ' + quesyion); break;
        case 'en': console.log('Translate following sentence: ' + quesyion); break;
    }
}

//ES6
function translateEs6(quesyion, lang = 'mn'){

    switch(lang)
    {
        case 'mn': console.log('Дараах өгүүлбэрийг орчуул: ' + quesyion); break;
        case 'en': console.log('Translate following sentence: ' + quesyion); break;
    }
}

translate('What is your job?', 'mn');
translateEs6('Таныг хэн гэдэг вэ?');
translateEs6('Намайг Сарнай гэдэг');
translateEs6('Би Ховд-д амьдардаг');
translateEs6();