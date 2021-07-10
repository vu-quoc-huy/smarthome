const Temparature = require('../model/temperature')
exports.getAll = async (req, res) => {
    const limit = req.params.limit
    try {
        const temp = await Temparature.find();
        if (temp.length > limit) {
            let data = []
            for (let index = temp.length - limit; index < temp.length; index++) {
                const element = temp[index];
                data.push(element)
            }
            res.status(200).json({ status: true, data: data })
        }
        else {
            res.status(200).json({ status: true, data: temp })
        }

    }
    catch (err) {
        res.status(500).json({ status: false, data: [] })
    }
}
exports.paginationTemp = async (req, res) => {
    const option = {
        page: req.params.activePage,
        limit: 2,
    }
    try {
        const temp = await Temparature.paginate({}, option);
        res.status(200).json({
            status: true,
            data: temp
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            data: []
        })
    }

};
