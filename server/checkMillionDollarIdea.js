// const { UNSAFE_NavigationContext } = require("react-router");

const checkMillionDollarIdea = (req, res, next) => {
    let numWeeks = req.body.numWeeks;
    let weeklyRevenue = req.body.weeklyRevenue;
    let totalYield = numWeeks * weeklyRevenue;
    if (numWeeks !== '' || weeklyRevenue !== '') {
        if (Number(numWeeks) || Number(weeklyRevenue) || Number(numWeeks) > 0 || Number(weeklyRevenue) > 0 ) {
            if (totalYield >= 1000000) {
                next();
            } else {
                res.status(400).send();
            }       
        } else {
            res.status(400).send();
        }
   } else {
        res.status(400).send();
   }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
