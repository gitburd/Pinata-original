const Pool = require('pg').Pool
const pool = new Pool({
  host: 'localhost',
  database: 'pinata',
  port: 5432,
  ssl: process.env.NODE_ENV === 'production'
})

const getEmotionSkills = (request, response) => {
    pool.query(`SELECT s.skill_title, s.skill_details, s.skill_icon FROM skills AS s JOIN emotion_skills AS es ON es.skill_id = s.skill_id JOIN emotions AS e ON es.emotion_id = e.emotion_id WHERE e.emotion_text = 'Angry';`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getUserSkills = (request, response) => {
    pool.query(`SELECT s.skill_title, s.skill_details, s.skill_icon FROM skills AS s JOIN records AS r ON r.skill_id = s.skill_id JOIN users AS u ON r.user_id = u.user_id JOIN emotions AS e ON r.emotion_id = e.emotion_id WHERE u.user_id = 2 AND r.impact > 0 AND e.emotion_text = 'Angry'; `, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserRecords = (request, response) => {
    pool.query(`SELECT s.skill_title, s.skill_icon, r.before_lvl, r.after_lvl, r.impact, r.date FROM skills AS s JOIN records AS r ON r.skill_id = s.skill_id JOIN users AS u ON r.user_id = u.user_id WHERE u.user_id = 2;`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  module.exports = {
    getEmotionSkills,
    getUserSkills,
    getUserRecords
  }