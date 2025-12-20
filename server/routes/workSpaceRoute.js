import express from 'express';
import { getUserWorkspaces, addMember } from '../controllers/workSpaceController.js';

const workSpaceRouter = express.Router();
workSpaceRouter.get('/', getUserWorkspaces)
workSpaceRouter.post('/add-member', addMember)


export default workSpaceRouter