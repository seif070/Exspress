const datefunc = (req, res, next) => {
    let now = new Date();
    let h = now.getHours();
    if (!(h >= 9 && h <= 17) && (now.getDay() >= 1 && now.getDay() <= 5)) {
        res.send('Le service n\'est disponible qu\'aux heures de bureau (du lundi au vendredi, de 9h à 17h). Revenez demain.');
    } else {
        next();
    }
};

module.exports = datefunc;
