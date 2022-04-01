import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/product';
import { userById } from '../controllers/user';
import { isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth';
//khởi tạo 
const router = Router();

router.get("/products", list);//lấy danh sách
router.get("/product/:id", get);//lấy 1 sản phẩm
router.post('/products/:userId', requireSignin, isAuth, isAdmin, create);//thêm mới
router.delete("/product/:id", remove);//xóa 1
router.put("/product/:id", update)//sửa 1


router.param("userId", userById)

export default router;
