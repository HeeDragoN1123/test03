import express from 'express';
import { prisma } from '../utils/prisma/index.js';

const router = express.Router();



/* 게시글 조회 */
router.get('/posts', async (req, res) => {

      const posts = await prisma.posts.findMany({
        select:{
            Id : true,
            title : true,
            content : true,
        }
      });
      res.status(200).json({ posts });

  });


  /* 게시글 생성 */
  router.post('/posts', async (req, res) => {
    const { title, content } = req.body;

    const post =  await prisma.posts.create({
        data: {
          title,
          content,
        },
      });
      res.status(201).json({ post });
    
  });
  

/* 게시글 수정 */
  router.put('/posts/:postId', async (req, res) => {
    //const postId = req.params;
    const postId = req.params.postId; 
    const { title, content } = req.body;

      const updatedPost = await prisma.posts.update({
        where: { Id :  +postId },
        data: { title, content },
      });
      res.status(200).json({updatedPost});

  });
  

/* 게시글 삭제 */
  router.delete('/posts/:postId', async (req, res) => {
    const postId = req.params.postId;

      await prisma.posts.delete({
        where: { Id: +postId },
      });
      res.status(200).json({messege : 'success'});

  });


export default router;