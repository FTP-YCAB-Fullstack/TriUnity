import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailPhoto from "../components/DetailPhoto";
import Navbar from "../components/Navbar";
import Masonry from "react-masonry-css";
import RandomPhotos from "../components/RandomPhotos";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
import { withRouter } from "react-router-dom";

function DetailPhotos(props) {
  console.log(props);
  const [photos, setData] = useState([]);
  const id = props.match.params.id;
  const [detailPhotos, setDetailPhotos] = useState(id);
  const [isLoading, setLoading] = useState(true);
  const [cookies] = useCookies(["token"]);

  const getDownloadFromApi = async () => {
    const { data } = await axios.get(
      detailPhotos.data.download +
        "?client_id=qN-U_v7VlbUf0Yb_91yXwDtXhPgtf3j9LDrzQsWvAww"
    );
    const response = await axios.get(data.url, { responseType: "blob" });
    const url = URL.createObjectURL(new Blob([response.data]));
    detailPhotos.data.download = url;
    setLoading(false);
  };

  const getData = async () => {
    axios
      .get(`http://localhost:5000/photos`)
      .then(response => response.data)
      .then(json => {
        setData(json);
      });
  };

  const getDetailPhoto = async () => {
    await axios
      .get(`http://localhost:5000/detailpage/${id}`)
      .then(response => response.data)
      .then(json => {
        setDetailPhotos(json);
      });
  };

  const onClicktoDetailPhotos = id => {
    props.history.push({
      pathname: `/detailpage/${id}`
    });
  };

  const onClickDownload = async (url, filename, price) => {
    if (id[0] === "u" && price !== "Free") {
      if (!cookies.token) {
        Swal.fire({
          icon: "info",
          text: "if you want to download a paid one please sign in first!",
          confirmButtonText: "Sign In",
          cancelButtonText: "Cancel",
          showCancelButton: true,
          preConfirm: () => {
            props.history.push({
              pathname: "/signin",
              state: {
                redirect: props.location.pathname
              }
            });
          }
        });
      } else {
        const response = await axios
          .post(
            "http://localhost:5000/payment",
            { price: +price.split(" ")[1], id: id.slice(2) },
            { withCredentials: true }
          )
          .catch(error => error.response);
        if (response && response.status === 201) {
          window.snap.pay(response.data.token, {
            onSuccess: function(result) {
              /* You may add your own implementation here */
              const link = document.createElement("a");
              link.href = url;
              link.download = filename;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);

              Swal.fire({
                icon: "success",
                title: "payment success!",
                timer: 2000
              });
            },
            onPending: function(result) {
              /* You may add your own implementation here */

              Swal.fire({
                icon: "info",
                title: "wating your payment!"
              });
            },
            onError: function(result) {
              /* You may add your own implementation here */

              Swal.fire({
                icon: "error",
                title: "payment failed!"
              });
            },
            onClose: function() {
              /* You may add your own implementation here */

              Swal.fire({
                icon: "warning",
                title: "you closed the popup without finishing the payment"
              });
            }
          });
        } else {
          console.log(response.data);
        }
      }
    } else {
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getDetailPhoto();
  }, [id]);

  useEffect(() => {
    if (detailPhotos.data) {
      setLoading(true);
      if (id[0] === "a") {
        getDownloadFromApi();
      } else {
        if (isLoading) {
          setLoading(false);
        }
      }
    }
  }, [detailPhotos]);

  return isLoading ? (
    "loading"
  ) : (
    <div>
      <Navbar />
      <DetailPhoto {...{ ...detailPhotos, id, onClickDownload }} />
      <Masonry
        breakpointCols={{ default: 5, 800: 2 }}
        className="my-masonry-grid mx-12 my-7"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((item, index) => {
          return (
            <RandomPhotos
              onClicktoDetailPhotos={onClicktoDetailPhotos}
              {...item}
              key={index}
            />
          );
        })}
      </Masonry>
    </div>
  );
}

export default withRouter(DetailPhotos);
