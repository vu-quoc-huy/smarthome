const User = require('../model/user')
const House = require('../model/house')
exports.create_new_user = async (req, res) => {
    try {
        let data = await User.create(req.body)
        res.status(200).json({ status: true, data: data })
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, data: [] })
    }
}
exports.login = async (req, res) => {
    try {
        let data = await User.findOne({ user_name: req.body.user_name, password: req.body.password })
        let smarthome = []
        if (data.smart_home.length != 0) {
            for (let index = 0; index < data.smart_home.length; index++) {
                const element = data.smart_home[index];
                console.log(element);
                home = await House.findById(element)
                smarthome.push(home)

            }
        }
        let resdata = {
            ...data._doc,
            smart_home: smarthome
        }
        res.status(200).json({ status: true, data: resdata })
    } catch (error) {
        res.status(500).json({ status: false, data: [] })
    }
}
exports.get_user_by_id = async (req, res) => {
    try {
        let data = await User.findById(req.params.id)
        let smarthome = []
        if (data.smart_home.length != 0) {
            for (let index = 0; index < data.smart_home.length; index++) {
                const element = data.smart_home[index];
                console.log(element);
                home = await House.findById(element)
                smarthome.push(home)

            }
        }
        let resdata = {
            ...data._doc,
            smart_home: smarthome
        }
        res.status(200).json({ status: true, data: resdata })
    } catch (error) {
        res.status(500).json({ status: false, data: [] })
    }
}

exports.add_new_house = async (req, res) => {
    try {
        let data = await House.create(req.body)
        res.status(200).json({ status: true, data: data })
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, data: [] })
    }
}
exports.delete_house = async (req, res) => {
    try {
        let user = await User.findById(req.body.idUser)
        console.log("param..", req.params.id);
        user.smart_home.remove(req.params.id)
        console.log("user...", user);
        await User.findByIdAndUpdate({ _id: req.body.idUser }, user)
        let data = await User.findById(req.body.idUser)
        res.status(200).json({ status: true, data: data })
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, data: [] })
    }
}
exports.add_house = async (req, res) => {
    try {
        let user = await User.findById(req.body.idUser)
        console.log("param..", req.params.id);
        user.smart_home.push(req.params.id)
        console.log("user...", user);
        let home = await House.findById(req.params.id)
        if (home) {
            await User.findByIdAndUpdate({ _id: req.body.idUser }, user)
            let data = await User.findById(req.body.idUser)
            res.status(200).json({ status: true, data: data })
        }
        res.status(500).json({ status: false, data: [] })
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, data: [] })
    }
}
exports.update_house = async (req, res) => {
    try {
        console.log(req.params.id);
        let data = await House.findByIdAndUpdate({ _id: req.params.id }, req.body)
        let resdata = await House.findById(req.params.id)
        res.status(200).json({ status: true, data: resdata })
    } catch (error) {
        res.status(500).json({ status: false, data: [] })
    }
}
