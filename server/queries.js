const Pool = require('pg').Pool
const pool = new Pool({
  host: 'localhost',
  database: 'pinata',
  port: 5432,
  ssl: process.env.NODE_ENV === 'production'
})

const getBaseSkills = (request, response) => {
  
    pool.query(`SELECT s.skill_title, s.skill_details, s.skill_icon, s.skill_id FROM skills AS s`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


const getEmotionSkills = (request, response) => {
  var emotion = request.query.emotion;
    pool.query(`SELECT s.skill_id, s.skill_title, s.skill_details, s.skill_icon FROM skills AS s JOIN emotion_skills AS es ON es.skill_id = s.skill_id JOIN emotions AS e ON es.emotion_id = e.emotion_id WHERE e.emotion_text ='${emotion}';`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getUserSkills = (request, response) => {
  var userId = request.query.id;
  var emotion = request.query.emotion;
  
    pool.query(`SELECT s.skill_title, s.skill_details, s.skill_icon, s.skill_id FROM skills AS s JOIN records AS r ON r.skill_id = s.skill_id JOIN users AS u ON r.user_id = u.user_id JOIN emotions AS e ON r.emotion_id = e.emotion_id WHERE u.user_id=${userId} AND r.impact > 0 AND e.emotion_text ='${emotion}'; `, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  // ordered by most recent - could also group by skill/emotion/si -- secondary features

  const getUserRecords = (request, response) => {
    var userId = request.query.user_id;
    pool.query(`SELECT s.skill_title, s.skill_icon, r.record_id, r.skill_id, r.emotion_id, r.before_lvl, r.after_lvl, r.impact, r.date, r.si, r.sh, e.emotion_text FROM skills AS s JOIN records AS r ON r.skill_id = s.skill_id JOIN emotions AS e on r.emotion_id = e.emotion_id JOIN users AS u ON r.user_id = u.user_id WHERE u.user_id =${userId} ORDER BY r.record_id DESC;`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  // http://localhost:3001/api/userRecords?id=2

  const addFullRecord = (request, response) => {
     let impact = request.body.before_lvl - request.body.after_lvl;
    pool.query(`INSERT INTO records (user_id, skill_id, emotion_id, before_lvl, after_lvl, impact, date, si, sh) VALUES('${request.body.user_id}','${request.body.skill_id}','${request.body.emotion_id}','${request.body.before_lvl}','${request.body.after_lvl}','${request.body.impact}','${request.body.date}','${request.body.si}','${request.body.sh}');`,(error, results) => {
      if (error) {
        throw error
      }
      console.log("add record successful - yay!");
    } )
  }


  const addRecord = (request, response) => {
    pool.query(`INSERT INTO records (user_id, skill_id, emotion_id, before_lvl, date, si, sh)  VALUES('${request.body.user_id}','${request.body.skill_id}','${request.body.emotion_id}','${request.body.before_lvl}','${request.body.date}','${request.body.si}','${request.body.sh}');`,(error, results) => {
      if (error) {
        throw error
      }
      console.log("add record successful - yay!");
    } )
  }

  const getSkillId = (request, response) => {
    var skillTitle= request.query.skillTitle;
    // var emotion_text= request.query.emotion_text;
    // var emotion = request.query.emotion;
    
      pool.query(`SELECT skill_id FROM skills WHERE skill_title ='${skillTitle}';`, (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }


    const getEmotionId = (request, response) => {
    
    pool.query(`SELECT * FROM emotions ;`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
 

  const finishRecord = (request, response) => {
    var record_id = request.query.record_id;
    let impact = request.body.before_lvl - request.body.after_lvl;
    pool.query(` UPDATE records SET after_lvl ='${request.body.after_lvl}', impact = ${impact}  WHERE record_id ='${record_id}';`,(error, results) => {
      if (error) {
        throw error
      }
      console.log("finish record successful - yay!");
    } )
  }

   // body 
  // {
  
  //   "after_lvl": "",
  //   "before_lvl": ""
 
  // }

  

  module.exports = {
    getBaseSkills,
    getEmotionSkills,
    getUserSkills,
    getUserRecords,
    addRecord,
    addFullRecord,
    finishRecord,
    getSkillId, 
    getEmotionId
  }