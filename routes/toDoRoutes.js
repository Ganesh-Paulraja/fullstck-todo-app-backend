const {Router}  = require("express")
const router = Router()
const {getToDo, saveToDo, updateToDo, deleteToDo} = require('../controllers/todoController')

router.get('/get', getToDo)
router.post('/save', saveToDo)
router.put('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router