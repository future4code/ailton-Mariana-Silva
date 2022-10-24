import { BASE_URL } from "../../constants/urls";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export const useRequest = (url) => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/${url}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Ocorreu um erro inexperado. Tente novamente mais tarde!`,
          footer: `Código do erro: ${err?.response?.status}`,
          confirmButtonColor: "#5C16C5",
        });
      });
  }, [url]);
  return data;
};
