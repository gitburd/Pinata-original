const Pool = require('pg').Pool
const pool = new Pool({
  host: 'localhost',
  database: 'pinata',
  port: 5432,
  ssl: process.env.NODE_ENV === 'production'
})

const getBaseSkills = (request, response) => {
  
    pool.query(`SELECT skill_title, skill_details, skill_icon, skill_id FROM skills WHERE user_id is null`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getCustomSkills = (request, response) => {
    var user_id = request.query.user_id;
    pool.query(`SELECT * FROM skills WHERE user_id=${user_id} `, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getCriticalSkills = (request, response) => {
  
    pool.query(`SELECT * FROM skills WHERE is_critical='true'`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


const getEmotionSkills = (request, response) => {
  var emotion = request.query.emotion;
    pool.query(`SELECT s.skill_id, s.skill_title, s.skill_details, s.skill_icon, es.is_star FROM skills AS s FULL OUTER JOIN emotion_skills AS es ON es.skill_id = s.skill_id JOIN emotions AS e ON es.emotion_id = e.emotion_id WHERE e.emotion_text ='${emotion}';`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
 
const getUserSkills = (request, response) => {
  var userId = request.query.id;
  var emotion = request.query.emotion;
  
    pool.query(`SELECT s.skill_title, s.skill_details, s.skill_icon, s.skill_id, s.is_heart FROM skills AS s JOIN records AS r ON r.skill_id = s.skill_id JOIN users AS u ON r.user_id = u.user_id JOIN emotions AS e ON r.emotion_id = e.emotion_id WHERE u.user_id=${userId} AND r.impact > 0 AND e.emotion_text ='${emotion}'; `, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  // ordered by most recent - could also group by skill/emotion/si -- secondary features

  const getUserRecords = (request, response) => {
    var userId = request.query.user_id;
    pool.query(`SELECT s.skill_title, s.skill_icon, r.record_id, r.skill_id, r.emotion_id, r.before_lvl, r.after_lvl, r.impact, r.date, r.si, r.sh, e.emotion_text FROM skills AS s FULL OUTER JOIN records AS r ON r.skill_id = s.skill_id FULL OUTER JOIN emotions AS e on r.emotion_id = e.emotion_id FULL OUTER JOIN users AS u ON r.user_id = u.user_id WHERE u.user_id =${userId} ORDER BY r.date DESC;`, (error, results) => {
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

const newRecord = (request, response) => {
  emotion_id = parseInt(request.body.emotion_id)
  pool.query(`INSERT INTO records (user_id, emotion_id, before_lvl, date, si, sh)  VALUES('${request.body.user_id}','${emotion_id}','${request.body.before_lvl}','${request.body.date}','${request.body.si}','${request.body.sh}') RETURNING *;`,(error, results) => {
    if (error) {
      throw error
    }
    console.log('new record successful')
    response.send({record:results.rows[0]});
  } )

}

const newRecordWithSkill = (request, response) => {
  pool.query(`INSERT INTO records (user_id, emotion_id, before_lvl, date, si, sh, skill_id)  VALUES('${request.body.user_id}','${request.body.emotion_id}','${request.body.before_lvl}','${request.body.date}','${request.body.si}','${request.body.sh}','${request.body.skill_id}' ) RETURNING *;`,(error, results) => {
    if (error) {
      throw error
    }
    console.log('new record successful')
    response.send({record:results.rows[0]});
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
    var skill_title = request.query.skill_title;
    
      pool.query(`SELECT skill_id FROM skills WHERE skill_title ='${skill_title}';`, (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }


    const getEmotionId = (request, response) => {
      var emotion_text= request.query.emotion_text;
    pool.query(`SELECT emotion_id FROM emotions WHERE emotion_text ='${emotion_text}';`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
 

  const finishRecord = (request, response) => {
    var record_id = request.query.record_id;
    let impact = request.body.before_lvl - request.body.after_lvl;
    pool.query(` UPDATE records SET after_lvl ='${request.body.after_lvl}', impact = ${impact} WHERE record_id ='${record_id}';`,(error, results) => {
      if (error) {
        throw error
      }
      console.log("finish record successful - yay!");
    } )
  }

  const setSkill = (request, response) => {
   let record_id = request.body.record_id;
    let skill_id = request.body.skill_id;
    pool.query(` UPDATE records SET skill_id ='${skill_id}' WHERE record_id ='${record_id}' RETURNING *;`,(error, results) => {
      if (error) {
        throw error
      }
      console.log("skill set to the record successfully!")
      // response.send({record:results.rows[0]});
      response.send({record:results.rows[0]});
    } )
  }
 

  const getPromptRecord = (request, response) => {

  var auth0_id = request.query.auth0_id;
    pool.query(`SELECT s.skill_title, s.skill_id, r.record_id,  r.before_lvl, r.date, r.si, r.sh, e.emotion_text FROM skills AS s FULL OUTER JOIN records AS r ON r.skill_id = s.skill_id FULL OUTER JOIN emotions AS e on r.emotion_id = e.emotion_id FULL OUTER JOIN users AS u ON r.user_id = u.user_id WHERE u.auth0_id ='${auth0_id}' AND r.after_lvl IS NULL AND r.skill_id IS NOT NULL ORDER BY r.record_id DESC LIMIT 1;`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getNewRecord = (request, response) => {
    var auth0_id = request.query.auth0_id;
    pool.query(`SELECT * FROM records AS r FULL OUTER JOIN users AS u ON u.user_id = r.user_id WHERE r.after_lvl IS NULL AND u.auth0_id='${auth0_id}'  ORDER BY r.record_id DESC LIMIT 1;`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const GetUserId = (request, response) => {
    var auth0_id = request.query.auth0_id;
    
    pool.query(`SELECT * FROM users WHERE auth0_id='${auth0_id}' `, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    }) 
  
  }
  
  const MakeNewUser = (request, response) => {
    pool.query(`INSERT INTO users (auth0_id, first_name, last_name) VALUES('${request.body.auth0_id}','${request.body.first_name}','${request.body.last_name}');`,(error, results) => {
      if (error) {
        throw errorR
      }
      console.log("add user successful - yay!");
    } )

  }

  const searchBySI = (request,response) =>{
    var user_id = request.query.user_id;
    const query = `SELECT * FROM records WHERE user_id='${user_id} ' AND si='true'`;
    console.log(query);
    pool.query(`${query}`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };

  const searchBySH = (request,response) =>{
    var user_id = request.query.user_id;
    const query = `SELECT * FROM records WHERE user_id='${user_id} ' AND sh='true'`;
    console.log(query);
    pool.query(`${query}`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };

  const searchByImpact = (request,response) =>{
    var user_id = request.query.user_id;
    var impact = request.query.keyword;
    const query = `SELECT * FROM records WHERE user_id='${user_id} ' AND impact >'${impact}'`;
    console.log(query);
    pool.query(`${query}`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };
  const searchByFeeling = (request,response) =>{
    var user_id = request.query.user_id;
    var emotion = request.query.keyword;
    const query = `SELECT * FROM records as r JOIN emotions AS e ON r.emotion_id = e.emotion_id WHERE r.user_id=${user_id} AND e.emotion_text ='${emotion}'`;
    console.log(query);
    pool.query(`${query}`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };

  const searchBySkill = (request,response) =>{
    var user_id = request.query.user_id;
    var skill = request.query.keyword;
    const query = `SELECT * FROM records as r JOIN skills AS s ON r.skill_id = s.skill_id WHERE r.user_id='${user_id} ' AND s.skill_id='${skill}'`;
    console.log(query);
    pool.query(`${query}`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };

  const searchByUnfinished = (request, response) => {
    var user_id = request.query.user_id;
    pool.query(`SELECT * FROM records WHERE after_lvl IS NULL AND user_id='${user_id}' ORDER BY record_id DESC;`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const makeCustomSkill = (request, response) => {
    var skill_title = request.body.skill_title;
    var skill_details = request.body.skill_details;
    var skill_icon = request.body.skill_icon;
    var user_id = request.body.user_id;
    pool.query(`INSERT INTO skills (skill_title, skill_details, skill_icon, is_heart, user_id) VALUES('${skill_title}','${skill_details}','${skill_icon}',true,'${user_id}') RETURNING *;`,(error, results) => {
      if (error) {
        throw error
      }
      console.log('new record successful')
      response.send({skill:results.rows[0]});
    } )
  
  }



  
  module.exports = {
    getBaseSkills,
    getCriticalSkills, 
    getEmotionSkills,
    getUserSkills,
    getUserRecords,
    addRecord,
    newRecord,
    newRecordWithSkill,
    addFullRecord,
    finishRecord,
    setSkill,
    getSkillId, 
    getEmotionId,
    getPromptRecord,
    getNewRecord,
    MakeNewUser, 
    GetUserId,
    searchBySI,
    searchBySH,
    searchByImpact,
    searchByFeeling,
    searchBySkill,
    searchByUnfinished,
    makeCustomSkill,
    getCustomSkills

  }