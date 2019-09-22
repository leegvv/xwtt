module.exports = (req, res) => {
    console.log(req.body);
    res.json({userNickName: '11', userId: 1});
}