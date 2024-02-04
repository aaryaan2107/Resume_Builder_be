const mongoose = require('mongoose');

const rdataschema = new mongoose.Schema({
    userId:String,
    rid:String,
    rmakeid:Number,
    frist_nm:String,
    last_nm:String,
    DOB:Date,
    gender:String,
    marital_status:String,
    profession:String,
    address:String,
    country:String,
    pin_code:String,
    phone:Number,
    email:String,
    skils : [
        {
            name:String,
            level:String,
        }
    ],
    professional_summary:String,
    interest1:String,
    interest2:String,
    interest3:String,
    work_hs : [
        {
            job_title:String,
            emp:String,
            location:String,
            state:String,
            start_date:String,
            end_date:String,
            job_description:String,
        }
    ],
    education : [
        {
            s_name:String,
            s_location:String,
            degree:String,
            field_of_study:String,
            graduation_date:String,
            grades:Number,
            state:String,
        }
    ]
});

const rdata = mongoose.model('rdata',rdataschema);

module.exports = rdata;