const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const UserSchema=new schema({
    name : { type:String, lowercase: true },
    email: { type:String },
    phone: { type:String }
})


// schema.pre('save', async function save(next) {
//   if (!this.isModified('password')) return next();
//   try {
//     const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
//     this.password = await bcrypt.hash(this.password, salt);
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// });


module.exports=Users=mongoose.model('Users',UserSchema)
