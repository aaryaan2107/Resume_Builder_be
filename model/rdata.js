const mongoose = require('mongoose');

const rdataschema = new mongoose.Schema({
    userId:String,
    rid:String,
    rmakeid:Number,
    frist_nm:String,
    last_nm:String,
    profession:String,
    city:String,
    country:String,
    pin_code:String,
    phone:Number,
    email:String,
    skils : [
        {
            name:String,
        }
    ],
    professional_summary:String,
    work_hs : [
        {
            job_title:String,
            emp:String,
            location:String,
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

        }
    ]
});

const rdata = mongoose.model('rdata',rdataschema);

module.exports = rdata;