import axios from "axios";
export default axios.create({
    //localhost yerine ip adresiniz yazılmalı
    baseURL:"http://localhost:5000",
})