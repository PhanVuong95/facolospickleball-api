import Post from "./postModels";
import XLSX from "xlsx";

export const listPost = async (req, res) => {
  try {
    const posts = await Post.find().exec();
    res.json({ message: "Danh sách Category!", posts });
  } catch (error) {
    res.status(400).json({ message: "Không thấy data" });
  }
}; 

export const createPost = async (req, res) => {
  try {
    const post = await Post(req.body).save();
    res.status(200).json({ message: "Lưu thành công!", post });
  } catch (error) {
    res.status(400).json({ message: "Không thấy data" });
  }
};

export const exportPostsToExcel = async (req, res) => {
  try {
    const posts = await Post.find().exec();

    const data = posts.map((post, index) => ({
      STT: index + 1,
      name: post.name,
      phone: post.phone,
      email: post.email,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    }));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, "Posts");

    const buffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

    res.setHeader("Content-Disposition", "attachment; filename=posts.xlsx");
    res.setHeader("Content-Type", "application/octet-stream");
    res.send(buffer);
  } catch (error) {
    res.status(500).json({ message: "Error exporting data to Excel", error });
  }
};
