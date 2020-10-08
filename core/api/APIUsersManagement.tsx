/**
 * API service for user management
 *
 * @version 1.0.0
 * @author [Kumaresan Periyasamy]
 */
import { API } from "./APIInterceptors";
import { AppConstants } from "../api/constants/Constant";
import { AsyncStorage } from "react-native"
export class APIUserManagement {
  filterData(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  updateData(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  selectPolling(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  uploadImage(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  getState(): Promise<any> {
    console.log("GET")
    // const url: any = AppConstants.API_BASE_URL.concat("/users");
    return API.get("api/v1/location/states?country_id=1", {
      responseType: "json",
      headers: {
        "language": "en",
        'accept': 'application/json',
      }
    });
  }
  getCategoryList(): Promise<any> {
   
    // const url: any = AppConstants.API_BASE_URL.concat("/users");
    return API.get("api/v1/category", {
      responseType: "json",
      headers: {
        "language": "en",
        'Content-Type': 'application/json',
        'Authorization': ""
      }
    });
  }
  getNeighbourhood(data: any): Promise<any> {
    console.log("getNeighbourhood data :" + data)
    console.log("GET")
    // const url: any = AppConstants.API_BASE_URL.concat("/users");
    return API.get("api/v1/neighbourhoods?user_id=" + data, {
      responseType: "json",
      headers: {
        "language": "en",
        'Content-Type': 'application/json',
        'Authorization':""
      }
    });
  }
  getGroupList(data: any): Promise<any> {
    console.log("getNeighbourhood data :" + data)
    console.log("GET")
    // const url: any = AppConstants.API_BASE_URL.concat("/users");
    return API.get("api/v1/groups?district_id=1&start_index=1&limit=10", {
      responseType: "json",
      headers: {
        "language": "en",
        'Content-Type': 'application/json',
        'Authorization': ""
      }
    });
  }

}


