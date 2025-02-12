import axios from "axios";

class CarService {
    static BASE_URL = "http://13.201.14.76:8080/";

    // Register a new car
    static async register(carData) {
        try {
            const response = await axios.post(`${CarService.BASE_URL}registerCar`, carData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error registering car:", error);
            throw error.response ? error.response.data : error;
        }
    }

    // Get car details by ownerId
    static async getCar(ownerId) {
        try {
            const response = await axios.get(`${CarService.BASE_URL}get-car/${ownerId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching car details:', error);
            throw error.response ? error.response.data : error;
        }
    }

    // Update car details
   
    static async updateCarDetails(carData) {
        try {
            // ✅ Use vehicleNumber in the URL and send the rest in the request body
            const response = await axios.put(
                `${CarService.BASE_URL}update-status/${carData.vehicleNumber}`,  // vehicleNumber in URL
                {
                    newLocation: carData.newLocation,  // Only sending the required fields
                    status: carData.status
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error("Error updating car details:", error);
            throw error.response ? error.response.data : error;
        }
    }
    
}

export default CarService;
