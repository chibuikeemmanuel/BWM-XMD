const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUyXKjSBT8l7pKbrEvinDEsEoYrWhBeKIPBRRSSewUSODQv09g2dE+TPd4bhW15MvKzPfeQJrhCtmoBeM3kJe4gQT1S9LmCIyBWkcRKsEQhJBAMAa1suUNZg5P/iy44P1ctTkqXPue1TaQms51NjwIuTfi6n31DO5DkNd+jIM/AMZKvXQX7sTfFkeizEt32TrzcudOiuVG0/S2xYrOWbLWnq/P4N4jQlzi9GjkJ5SgEsY2alcQl9+jX0wFfhrG9qQjgmaG19bzZmZdFxuBFyV3tGwtlbXyG7Ngdt+j76hVMX/pMs+dcItDy8JBfQzOo1PTWLuXQCmw63fRofFTVXnQr/AxRaEVopRg0n5b94nZObPbrEyCIq00ZbaTW1l1mTjhY6QZnbxqnQUKeGfnzr9HPBtkLcZIkLiF6XILc7de+bedOp/SZr5TQmtrjzpp8GIG6fUr8VX5mZXL/9F9Z57JfhbRtRxPk5OvFqYSO8HhuGz3VqjJB3Pi5lFOLN+1vkefUVezlbzlo/h8PkvC4Kzbg1GyMabhy9rZ0+U0arbF/LyfXr1f9CGpyz+xTCJ2OjqsuSk++yfamWJd4Da0oscdG6t1t8ukm5f7RBJJV8kzIV1d6IoVpgXvN1pk10IUNdmAejVwCwVDHpV0orT6+vn9RxfUWiEY0/chKNERV6SEBGdpvyezQwDDZoOCEpF3dQH9qp8HrX219i2+5h3ZLprtkagNnNEWJR/MwJ5VJtt6lmM8gyHIyyxAVYXCKa5IVrZzVFXwiCow/vvnEKToRh6+9dVYeggiXFZkl9Z5nMHw09TPQxgEWZ2STZsGWr9AJRhTv7YRITg9Vr2MdQrL4IQbpJ0gqcA4gnGF7kMQogYHqMcDWbhJasaHG3cTr9ehlRypvXTtKZ+y9HEl4ASOo5D8xEDGf+JoxD5JAQ2fKJFnRFqmKYrnwRDgj5bp3/zWwVQ8r+JOLNiiW07sw1Zkd6P00mnG+fLuwkN6VKIQjElZoyHwYXCp8212QekfcKVqiYnrQVcY7NxiZr1kkXNrm/M58r7gPiwF47dfY0rLwh5Pl1VdYGkFDEHynkDc/5xhOYmmRYYSGJoai9Jf1Y9rryTM8x8pIj3wh+r9kxARiOMKjIFmFewxydbEZoLm6nnKRlFsRemT8OnSZ9ofcfK8pX/Rc31uC3nbmA3myOiwaLATVvuJkjc2Fvj6RAuvxr+C9K3BaKSZ41uka6Jx5qoJtV45AzTjNCi9GKeKkH1BW8tWDBMROiMfxUtRTU6+hPl1EF3snJmzlYLWClUfRXFKU6ldqspzX+2Rlq/FcL7gFhNm+4p4TeUHRqDq8Da5vUYLrikQxMHqsJHjriwpZcQbr+luoEv74yWfl8ZttjSZ8lXO1RdMvEipF6qR6pPQUa+PPnyfA/HH/MXvLfL2ka0Io/dxlsLeo/9052vOqfvwC8jHhPxNllR3oie8Iqw7rS6C8uZz9SyiO5+7HHzTOdp+m9W1n4UocRRwv/8cgjyGJMrKBIwBTMMywyEYghhWRPnVqlucoIrAJAdjWuRYWhYlSb7/A9l37mLfBwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "METRO",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " METRO",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'METRO_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

