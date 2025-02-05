import { groq } from "next-sanity";


export const allfoods = groq`*[_type == "food"]`
export const allChefs = groq`*[_type == "chef"]`