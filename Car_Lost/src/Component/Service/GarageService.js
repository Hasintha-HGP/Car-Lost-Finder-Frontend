import axios from "axios";

class GarageService{

    static BASE_URL = "http://localhost:8080/";


    static async getGarage(ownerId) {
        try {
            const response = await axios.get(`${GarageService.BASE_URL}get-garage/${ownerId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching car details:', error);
            throw error.response ? error.response.data : error;
        }
    }


}
export default GarageService;