import axios from "axios";

class CommentService{

    static BASE_URL = "http://13.201.14.76:8080/";
    static async addReview(reviewData){
        try{
            const response=await axios.post(`${CommentService.BASE_URL}addReview`, reviewData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            return response.data;
        }catch(error){
            throw error.response ? error.response.data : error;
        }
    }
    static async getReviews() {
        try {
          const response = await axios.get(`${CommentService.BASE_URL}getAllReviews`);
          return response.data;
        } catch (error) {
          console.error("Error fetching reviews:", error);
          throw error.response ? error.response.data : error;
        }
}
}
export default CommentService;