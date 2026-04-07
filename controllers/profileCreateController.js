const Profile = require("../models/profileCreateModel")

let profileCreateController = (req,res)=>{
    const {email,name,phoneNumber,bloodGroup,gender,dob} = req.body

    let firstThreeLetter = name.slice(0,3)
    let randomNumber = Date.now().toString()
    let emid = firstThreeLetter+randomNumber.slice(-3)




    let profile = new Profile({
        employeeId: emid,
        email: email,
        name: name,
        phoneNumber: phoneNumber,
        bloodGroup: bloodGroup,
        gender: gender,
        dob: dob
    })

    profile.save()

    res.status(201).json({
        status: true,
        message: "Profile Created"
    })

}

let getProfile = async (req,res)=>{
     let data = await Profile.find({})
     res.status(200).json({
        status: true,
        message: "All Profile",
        data: data
     })
}

let getSingleProfile = async (req,res) => {
    let {id} = req.params

    let data = await Profile.findOne({_id:id})
     res.status(200).json({
        status: true,
        message: `${data.name} Profile`,
        data: data
     })
    
}

let updateProfile = async (req,res)=>{
    let {id} = req.params

    let data = await Profile.findByIdAndUpdate({_id:id},req.body,{new: true})

    res.status(200).json({
        status: true,
        message: "Update Successfull",
        data: data
     })
}

let holdProfile = async (req,res)=>{
    let {id} = req.body
    let existingUser = await Profile.findOne({_id:id})

    existingUser.isHold = true
    existingUser.save()

    res.send("hoise")
   
}


module.exports = {profileCreateController,getProfile,getSingleProfile,updateProfile,holdProfile}