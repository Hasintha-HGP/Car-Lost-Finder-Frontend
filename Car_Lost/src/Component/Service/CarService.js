import axios from "axios";

class CarService {
    static BASE_URL = "http://localhost:8080/";

    static async register(carData) {
        try {
            const response = await axios.post(`${CarService.BASE_URL}registerCar`, carData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(carData);
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    }
    static async getCar(ownerId) {
        try {
          const response = await axios.get(`${CarService.BASE_URL}get-carr/${ownerId}`);
          return response.data;
        } catch (error) {
          console.error('Error fetching car details:', error);
          throw error; 
        }
      }
    }
export default CarService;  
