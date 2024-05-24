import type { NextApiResponse, NextApiRequest } from "next";
import { proxy } from "@/services/server/proxy";
import rateLimit from "@/services/utils/rate-limit";

const limiter = rateLimit({
    interval: 60 * 1000,
    uniqueTokenPerInterval: 500
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await limiter.check(res, 20, "CACHE_TOKEN")
    } catch (error) {
        res.status(429).json({
            error: "Rate limit exceeded"
        })
        return
    }

    await proxy(req, res);
}