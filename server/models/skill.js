var mongoose = require('mongoose');

// skill Schema

var skillSchema = mongoose.Schema({
    skill:{
        type: String,
        required: true
    },
    icon:{
        data: Buffer, 
        contentType: String 
    },
    level_change:{
        type: Array
    },
    time:{
        type: String
    },
    completedStatus:{
        type:Boolean
    },
    helpful:{
        type:Boolean
    }
    // tags:{
    //     type:Array
    // }

});

var Skill = module.exports = mongoose.model('Skill', skillSchema);

// Get Skills

module.exports.getSkills = function(callback, limit){
    Skill.find(callback).limit(limit);
    console.log('test')
}

// module.exports.getSkillsByTag = function(){
//     Skill.find({"skill":"music"}).limit(8);
// }

// // Get skill by id
// module.exports.getskillById = function (id, callback) {
//     skill.findById(id, callback);
// }

// // Add skill

// module.exports.addskill = function (skill, callback) {
//     skill.create(skill, callback);
// }

// // Update Text
// module.exports.updateskill = function (id, skill, options, callback) {
//     var query = {_id:id};
//     var update ={
//         text:skill.text,
//         ki:skill.ki
//     }
//     skill.update(query,{$set:{text:skill.text}}, options, callback);
// }

// // Update ki
// module.exports.updateKi = function (id, skill, options, callback) {
//     var query = {_id:id};
//     var update ={
//         text:skill.text,
//         ki:skill.ki
//     }
//     skill.update(query,{$set:{ki:skill.ki}}, options, callback);
// }

// // Delete skill
// module.exports.deleteskill = function (id, callback) {
//     var query = {_id:id};
//     skill.remove(query,callback);
// }
