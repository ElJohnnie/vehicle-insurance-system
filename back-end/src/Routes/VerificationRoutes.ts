import express, { Request, Response } from 'express'

const router = express.Router()

router.get(
    '/ping',
    async (req: Request, res: Response) => {
        return res.status(200).json(
            {
                message: 'Verificação realizada com sucesso'
            }
        )
    }
)

export { router as verificationRoutes }
