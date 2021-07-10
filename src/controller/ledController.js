const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker.hivemq.com')

exports.updateStateLed = async (req, res) => {
    try {
        console.log("body... : ",req.body.state);
        await client.publish("/smarthouse/stateLed", req.body.state.toString())
        res.status(200).json({ status: true })
    } catch (error) {
        res.status(500).json({ status: false })
    }
}
exports.updateStateDoor=async (req,res)=>{
    try {
        console.log("body... : ",req.body.state);
        await client.publish("/smarthouse/stateDoor", req.body.state.toString())
        res.status(200).json({ status: true })
    } catch (error) {
        res.status(500).json({ status: false })
    }
}