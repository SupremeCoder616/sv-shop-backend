const express = require("express");
const { 
    createProduct, 
    getaProduct, 
    updateProduct, 
    getallProducts, 
    deleteProduct,
    addToWishlist,
    rating,
    uploadImages,
    deleteImages
} = require('../controller/productCtrl')
const { isAdmin, authMiddleware } = require('../middlewares/authMiddeware');
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImage");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.put("/upload/", authMiddleware, isAdmin, uploadPhoto.array("images",10),productImgResize, uploadImages);
router.get("/:id", getaProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);
router.put("/:_id", authMiddleware, isAdmin, updateProduct);
router.delete("/:_id", authMiddleware, isAdmin, deleteProduct);
router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);
router.get("/", getallProducts);


module.exports= router;