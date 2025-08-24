const router = require("express").Router();

const { getProposalsByUserID, getProposalByServiceID, createProposal, acceptProposal, deleteProposal } = require("../controllers/proposal.controller")


router.get('/s/:id', getProposalByServiceID)
router.get('/u/:id', getProposalsByUserID)
router.post('/', createProposal)
router.put('/:id', acceptProposal)
router.delete('/:id', deleteProposal)

module.exports = router