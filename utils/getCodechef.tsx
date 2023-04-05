import axios from "axios";

const ENDPOINT = "https://competeapi.vercel.app/user/codechef";

export interface StatsResponse {
  status: string;
  username?: string;
  rating?: string;
  rating_number?: number;
  country?: string;
  user_type?: string;
  institution?: string;
  organisation?: string;
  global_rank?: string;
  country_rank?: string;
  max_rank?: string;
  all_rating?: {};
}

export const getCodechef = async (username: string): Promise<StatsResponse> => {
  try {
    const response = await axios.get(`${ENDPOINT}/${username}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    // console.log();
    return { ...response.data, status: "OK" } as StatsResponse;
  } catch {
    const errMsg = "could not reach backend, try again later.";
    return { status: "error" };
  }
};
